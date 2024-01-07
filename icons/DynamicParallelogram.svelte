<script context="module">
	export const keywords = [
		'geometry',
		'polygon',
		'parallelogram',
		'quadrilateral',
	]
</script>

<script>
	import { Polygon, P45Util } from 'p45'
	import { grid, SVG } from './shared'

	export let slope = 4

	slope = P45Util.parseNumber(slope)
	if (!P45Util.within(slope, -8, 8)) {
		throw new Error(
			`[P44:DynamicParallelogram] slope out of bounds: -8 <= ${slope} <= 8`
		)
	}

	slope = Math.round(slope)

	const getCell = (col, row, top) => {
		let s = slope * 2
		const off = top ? +Math.floor(s) : -Math.ceil(s)
		return grid.n(col, row, off)
	}

	$: points = [
		getCell(2, 2, true), //
		getCell(14, 2, true), //
		getCell(14, 14, false), //
		getCell(2, 14, false), //
	]
</script>

<SVG {...$$restProps} {grid}>
	<Polygon {points} />
</SVG>
