<script context="module">
	export const keywords = ['geometry', 'polygon', 'rectangle', 'quadrilateral']
</script>

<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Polygon
		points={[grid.n(1, 4), grid.n(15, 4), grid.n(15, 12), grid.n(1, 12)]} />
</SVG>
