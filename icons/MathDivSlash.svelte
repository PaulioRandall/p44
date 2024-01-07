<script context="module">
	export const keywords = ['math', 'slash']
</script>

<script>
	import { Line } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Line from={grid.n(11, 1)} to={grid.n(5, 15)} />
</SVG>
