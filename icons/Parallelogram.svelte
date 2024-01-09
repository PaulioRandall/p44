<script>
	import { Polygon, P45Util } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Parallelogram
	//[doc:keywords] geometry, polygon, parallelogram, quadrilateral

	//[doc:prop] slope = Slope angle as a whole number between -8 (left leaning) and 8 (right leaning), defaults to 4
	export let slope = 4

	const getCell = (slope, col, row, top) => {
		let s = P45Util.parseNumber(slope)
		s = Math.round(s) * 2
		const off = top ? +Math.floor(s) : -Math.ceil(s)
		return grid.n(col, row, off)
	}

	$: points = [
		getCell(slope, 2, 2, true), //
		getCell(slope, 14, 2, true), //
		getCell(slope, 14, 14, false), //
		getCell(slope, 2, 14, false), //
	]
</script>

<SVG {...$$restProps} {grid}>
	<Polygon {points} />
</SVG>
