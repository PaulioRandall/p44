<script context="module">
	export const keywords = ['media control', 'iso', 'video', 'audio', 'play']
</script>

<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Polygon
		points={[
			grid.n(1, 1), //
			grid.n(15, 8), //
			grid.n(1, 15), //
		]} />
</SVG>
