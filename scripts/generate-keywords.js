import fs from 'fs'
import path from 'path'

// Not perfect but does the job.

const listIconFiles = () => {
	try {
		const files = fs.readdirSync('icons')
		return cleanSvelteIconFiles('icons', files)
	} catch (err) {
		console.error(err)
		throw new Error(`'./icons' dir could not be read`)
	}
}

const cleanSvelteIconFiles = (dir, files) => {
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

const readKeywords = (filename, absFilename) => {
	const text = readWholeFile(filename, absFilename)
	const ctxScript = getContextModuleScript(filename, text)
	return getKeywordExport(filename, ctxScript)
		.slice(1, -1) //
		.split(',') //
		.map((kw) => kw.trim().slice(1, -1).trim()) //
		.filter((kw) => !!kw) //
}

const readWholeFile = (filename, absFilename) => {
	try {
		return fs.readFileSync(absFilename, { encoding: 'utf-8' })
	} catch (err) {
		console.error(err)
		throw new Error(`'${filename}' could not be read`)
	}
}

const getContextModuleScript = (filename, text) => {
	const ctxScript = text.match(
		/<script\s+context="module"\s*>[\s\S]*?<\/script\s*>/gm //
	)

	if (!ctxScript || ctxScript.length === 0) {
		throw new Error(`'${filename}' is missing context='module' script`)
	}

	return ctxScript[0]
}

const getKeywordExport = (name, text) => {
	const keywordExport = text
		.replace(/[\n\r\t]/g, ' ') //
		.match(/export\s+const\s+keywords\s*=\s*\[.*\]/gm) //

	if (!keywordExport || !keywordExport[0]) {
		throw new Error(
			`'${name}.svelte' is missing 'export const keywords' in context="module"`
		)
	}

	const keywordArray = keywordExport[0].match(/\[.*\]?/m)

	if (!keywordArray || !keywordArray[0]) {
		throw new Error(
			`'${name}.svelte' has invalid 'export const keywords' in context="module"`
		)
	}

	return keywordArray[0]
}

const createOrReplaceFile = (filename, content) => {
	try {
		fs.writeFileSync(filename, content, { encoding: 'utf-8' })
	} catch (err) {
		console.error(err)
		throw new Error(`'${filename}' could not be written`)
	}
}

// *** Main ***

let keywordMap = {}

for (const f of listIconFiles()) {
	const { filename, absFilename } = f
	const keywords = readKeywords(filename, absFilename)
	const name = filename.slice(0, -7)
	keywordMap[name] = keywords
}

const content = `export default ` + JSON.stringify(keywordMap, null, 2)
createOrReplaceFile('keywords.js', content)
