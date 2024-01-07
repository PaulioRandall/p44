<script context="module">
	export const keywords = ['geometry', 'polygon', 'star']
</script>

<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Polygon
		points={[
			grid.n(8, 1),
			grid.n(9, 6, grid.HALF, grid.HALF),
			grid.n(15, 8),
			grid.n(9, 9, grid.HALF, grid.HALF),
			grid.n(8, 15),
			grid.n(6, 9, grid.HALF, grid.HALF),
			grid.n(1, 8),
			grid.n(6, 6, grid.HALF, grid.HALF),
		]} />
</SVG>
