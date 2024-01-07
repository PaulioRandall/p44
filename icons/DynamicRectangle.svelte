<script context="module">
	export const keywords = [
		'geometry',
		'polygon',
		'rect',
		'rectangle',
		'square',
		'quadrilateral',
	]
</script>

<script>
	import { Polygon, P45Util } from 'p45'
	import { grid, SVG } from './shared'

	export let wr = 8
	export let hr = 5

	wr = P45Util.parseNumber(wr)
	if (!P45Util.within(wr, 0, 8)) {
		throw new Error(`[P44:DynamicRectangle] wr out of bounds: 0 <= ${wr} <= 8`)
	}

	hr = P45Util.parseNumber(hr)
	if (!P45Util.within(hr, 0, 8)) {
		throw new Error(`[P44:DynamicRectangle] hr out of bounds: 0 <= ${hr} <= 8`)
	}

	wr = Math.round(wr)
	hr = Math.round(hr)
</script>

<SVG {...$$restProps} {grid}>
	<Polygon
		points={[
			grid.n(grid.centerXY.x - wr, grid.centerXY.y - hr),
			grid.n(grid.centerXY.x + wr, grid.centerXY.y - hr),
			grid.n(grid.centerXY.x + wr, grid.centerXY.y + hr),
			grid.n(grid.centerXY.x - wr, grid.centerXY.y + hr),
		]} />
</SVG>
