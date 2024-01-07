<script context="module">
	export const keywords = ['geometry', 'polygon', 'diamond']
</script>

<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Polygon
		points={[
			grid.n(1, 4),
			grid.n(5, 1),
			grid.n(11, 1),
			grid.n(15, 4),
			grid.n(8, 15),
		]} />
</SVG>
