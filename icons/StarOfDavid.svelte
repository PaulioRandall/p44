<script context="module">
	export const keywords = ['geometry', 'hexagram', 'hexagon', 'star']
</script>

<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Polygon
		points={[
			grid.n(8, 0), //
			grid.n(15, 12), //
			grid.n(1, 12), //
		]} />
	<Polygon
		points={[
			grid.n(1, 4), //
			grid.n(15, 4), //
			grid.n(8, 16), //
		]} />
</SVG>
