<script context="module">
	export const keywords = ['geometry', 'polygon', 'kite', 'quadrilateral']
</script>

<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Polygon
		points={[grid.n(1, 5), grid.n(8, 1), grid.n(15, 5), grid.n(8, 15)]} />
</SVG>
