<script context="module">
	export const keywords = ['geometry', 'lines', 'chopsticks', 'diverging']
</script>

<script>
	import { Line } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Line from={grid.n(5, 1, grid.HALF)} to={grid.n(9, 15)} />
	<Line from={grid.n(11, 1, grid.HALF)} to={grid.n(6, 15)} />
</SVG>
