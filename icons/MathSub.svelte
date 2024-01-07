<script context="module">
	export const keywords = ['math', 'line', 'minus', 'sub', 'subtract', 'pipe']
</script>

<script>
	import { Line } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Line from={grid.n(1, 8)} to={grid.n(15, 8)} />
</SVG>
