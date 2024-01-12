import fs from 'fs'
import path from 'path'

// docs.js - Not perfect but does the job.

let docsMap = {}

for (const f of listIconFiles()) {
	const { filename, absFilename } = f
	const name = filename.slice(0, -7)
	docsMap[name] = parseDocs(filename, absFilename)
}

// index.js

createOrReplaceFile(
	'index.js',
	Object.keys(docsMap)
		.map((k) => `export { default as ${k} } from './icons/${k}.svelte'`)
		.join('\n')
)

// docs.js

createOrReplaceFile(
	'docs.js',
	`export default ` + JSON.stringify(docsMap, null, 2)
)

// README.md

const placeholder = '+++(Do not remove: component docs are inserted here!!)+++'
const stringDocs = stringifyDocs(docsMap)
const readmeFile = path.resolve('./README.tmp.md')
const tmpReadme = readWholeFile('README.tmp.md', readmeFile)
const readme = tmpReadme.replace(placeholder, stringDocs)
createOrReplaceFile('README.md', readme)

// Functions

function listIconFiles() {
	try {
		const files = fs.readdirSync('icons')
		return listSvelteIconFiles('icons', files)
	} catch (err) {
		console.error(err)
		throw new Error(`'./icons' dir could not be read`)
	}
}

function listSvelteIconFiles(dir, files) {
	return files
		.filter((filename) => filename.endsWith('.svelte')) //
		.map((filename) => {
			const absFilename = path.join(dir, filename)
			return {
				filename, //
				absFilename: path.resolve(absFilename), //
			}
		})
}

function parseDocs(filename, absFilename) {
	// For example:
	//[docs:name] Abc
	//[docs:alt] Xyz
	//[docs:keywords] alpha, beta, charlie
	//[docs:prop] name description
	//[docs:slot] name description

	const docRegex = /\/\/\[doc:([a-z:]+)\](.*)/g
	const text = readWholeFile(filename, absFilename)
	const docs = {}

	while (true) {
		const next = docRegex.exec(text)
		if (!next) {
			break
		}

		parseDocString(filename, docs, next[1], next[2])
	}

	return docs
}

function parseDocString(filename, docs, name, value) {
	value = value.trim()

	switch (name) {
		case 'name':
			//[docs:name] Abc
			docs.name = value
			return

		case 'alt':
			//[docs:alt] Abc
			docs.alt = value
			return

		case 'keywords':
			//[docs:keywords] alpha, beta, charlie
			docs.keywords = splitTrimFilter(value, ',')
			return

		case 'prop':
			//[docs:prop] name = description
			const [pName, pDesc] = splitNameTrimFilter(value, filename)
			docs.props = docs.props || {}
			docs.props[pName] = pDesc
			return

		case 'slot':
			//[docs:slot] name = description
			const [sName, sDesc] = splitNameTrimFilter(value, filename)
			docs.slots = docs.slots || {}
			docs.slots[sName] = sDesc
			return

		default:
			throw new Error(
				`${filename}:\n\tI ain't never heard no "${name}" doc property.`
			)
	}
}

function splitTrimFilter(s, delim) {
	return s
		.split(delim) //
		.map((v) => v.trim()) //
		.filter((v) => !!v)
}

function splitNameTrimFilter(s, filename) {
	const m = s.match(/^[A-z][A-z0-9_]*/)

	if (!m || m.length === 0) {
		throw new Error(
			`${filename}:\n\tDoc property missing name or description: "${s}".`
		)
	}

	return [
		m[0].trim(), //
		s.slice(m[0].length).trim(), //
	]
}

function readWholeFile(filename, absFilename) {
	try {
		return fs.readFileSync(absFilename, { encoding: 'utf-8' })
	} catch (err) {
		console.error(err)
		throw new Error(`'${filename}' could not be read`)
	}
}

function createOrReplaceFile(filename, content) {
	try {
		fs.writeFileSync(filename, content, { encoding: 'utf-8' })
	} catch (err) {
		console.error(err)
		throw new Error(`'${filename}' could not be written`)
	}
}

function stringifyDocs(docs) {
	return Object.entries(docs) //
		.map(([name, d]) => {
			const lines = [`### ${name}`]
			lines.push('')

			stringifyDocsImport(lines, name)

			if (d.name) {
				lines.push(`- **Name**: ${d.name}`)
			}

			if (d.alt) {
				lines.push(`- **Description**: ${d.alt}`)
			}

			if (d.keywords) {
				lines.push(`- **Keywords**: ${d.keywords.join(', ')}`)
			}

			if (d.props) {
				stringifyDocsObject(lines, 'Props', d.props)
			}

			if (d.slots) {
				stringifyDocsObject(lines, 'Slots', d.slots)
			}

			lines.push('')
			return lines.join('\n')
		}) //
		.join('\n')
}

function stringifyDocsImport(lines, name) {
	lines.push('```svelte')
	lines.push(`import { ${name} } from 'p44'`)
	lines.push('```')
}

function stringifyDocsObject(lines, name, obj) {
	lines.push(`- **${name}**:`)
	Object.entries(obj).forEach(([name, description]) => {
		lines.push(`  - _${name}_ ${description}`)
	})
}
