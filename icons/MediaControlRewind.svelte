<script context="module">
	export const keywords = [
		'media control',
		'video',
		'audio',
		'rewind',
		'fast forward',
	]
</script>

<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Polygon
		points={[
			grid.n(1, 8, grid.HALF), //
			grid.n(7, 2, grid.HALF), //
			grid.n(7, 14, grid.HALF), //
		]} />
	<Polygon
		points={[
			grid.n(8, 8, grid.HALF), //
			grid.n(14, 2, grid.HALF), //
			grid.n(14, 14, grid.HALF), //
		]} />
</SVG>
