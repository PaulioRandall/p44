<script>
	import { Polygon, P45Util } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Rectangle
	//[doc:keywords] geometry, polygon, rect, rectangle, square, quadrilateral

	//[doc:prop] wr = Width Radius (apothem), defaults to 8
	export let wr = 8

	//[doc:prop] hr = Height Radius (apothem), defaults to 5
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
