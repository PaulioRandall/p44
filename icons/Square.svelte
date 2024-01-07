<script context="module">
	export const keywords = ['geometry', 'polygon', 'rectangle', 'quadrilateral']
</script>

<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Polygon
		points={[grid.n(1, 1), grid.n(15, 1), grid.n(15, 15), grid.n(1, 15)]} />
</SVG>
