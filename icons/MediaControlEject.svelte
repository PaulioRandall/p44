<script context="module">
	export const keywords = ['media control', 'video', 'audio', 'eject']
</script>

<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Polygon
		points={[
			grid.n(8, 1), //
			grid.n(1, 8, grid.HALF), //
			grid.n(14, 8, grid.HALF), //
		]} />
	<Polygon
		points={[
			grid.n(1, 11), //
			grid.n(15, 11), //
			grid.n(15, 15), //
			grid.n(1, 15), //
		]} />
</SVG>
