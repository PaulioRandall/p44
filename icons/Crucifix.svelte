<script context="module">
	export const keywords = ['lines', 'crucifix', 'religion', 'cross']
</script>

<script>
	import { Line } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Line from={grid.n(8, 0)} to={grid.n(8, 16)} />
	<Line from={grid.n(2, 5, 0, grid.HALF)} to={grid.n(14, 5, 0, grid.HALF)} />
</SVG>
