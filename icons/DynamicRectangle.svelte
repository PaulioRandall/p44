<script>
	import { Polygon, P45Util } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Dymanic Rectangle
	//[doc:keywords] geometry, polygon, rect, rectangle, square, quadrilateral

	//[doc:prop] wr = Width Radius between 0 and 8, defaults to 8
	export let wr = 8

	//[doc:prop] hr = Height Radius between 0 and 8, defaults to 5
	export let hr = 5

	$: _wr = Math.round(P45Util.parseNumber(wr))
	$: _hr = Math.round(P45Util.parseNumber(hr))
</script>

<SVG {...$$restProps} {grid}>
	<Polygon
		points={[
			grid.n(grid.centerXY.x - _wr, grid.centerXY.y - _hr),
			grid.n(grid.centerXY.x + _wr, grid.centerXY.y - _hr),
			grid.n(grid.centerXY.x + _wr, grid.centerXY.y + _hr),
			grid.n(grid.centerXY.x - _wr, grid.centerXY.y + _hr),
		]} />
</SVG>
