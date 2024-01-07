<script context="module">
	export const keywords = ['geometry', 'lines', 'converging', 'diverging']
</script>

<script>
	import { Line } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Line from={grid.n(3, 15)} to={grid.n(7, 1)} />
	<Line from={grid.n(13, 15)} to={grid.n(9, 1)} />
</SVG>
