<script context="module">
	export const keywords = ['geometry', 'polygon', 'heart']
</script>

<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Polygon
		points={[
			grid.n(8, 5),
			grid.n(4, 1),
			grid.n(1, 5),
			grid.n(8, 15),
			grid.n(15, 5),
			grid.n(12, 1),
		]} />
</SVG>
