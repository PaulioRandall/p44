<script context="module">
	export const keywords = ['media control', 'iso', 'video', 'audio', 'pause']
</script>

<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Polygon
		points={[grid.n(1, 1), grid.n(6, 1), grid.n(6, 15), grid.n(1, 15)]} />
	<Polygon
		points={[grid.n(10, 1), grid.n(15, 1), grid.n(15, 15), grid.n(10, 15)]} />
</SVG>
