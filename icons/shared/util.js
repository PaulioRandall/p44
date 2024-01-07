import { P45Util } from 'p45'

export const zipArrays = (a, b) => {
	const len = a.length + b.length
	const result = []

	let ai = 0
	let bi = 0

	for (let i = 0; i < len; i++) {
		if (ai < a.length) {
			result.push(a[ai])
			ai++
		}

		if (bi < b.length) {
			result.push(b[bi])
			bi++
		}
	}

	return result
}

export const offsetRegPoly = (ref, n) => {
	switch (P45Util.parseNumber(ref, n)) {
		case 3:
			return { x: 0, y: P45Grid.UNIT * 1.5 }
		case 5:
			return { x: 0, y: P45Grid.UNIT * 0.75 }
		case 7:
			return { x: 0, y: P45Grid.UNIT * 0.3525 }
		default:
			return { x: 0, y: 0 }
	}
}
