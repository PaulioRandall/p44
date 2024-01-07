<script context="module">
	export const keywords = [
		'math',
		'cross',
		'plus',
		'add',
		'addition',
		'mul',
		'multiply',
	]
</script>

<script>
	import { Line } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Line from={grid.n(8, 1)} to={grid.n(8, 15)} />
	<Line from={grid.n(1, 8)} to={grid.n(15, 8)} />
</SVG>
