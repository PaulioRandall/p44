<script context="module">
	export const keywords = ['math', 'equal', 'equ']
</script>

<script>
	import { Line } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Line from={grid.n(1, 5)} to={grid.n(15, 5)} />
	<Line from={grid.n(1, 11)} to={grid.n(15, 11)} />
</SVG>
