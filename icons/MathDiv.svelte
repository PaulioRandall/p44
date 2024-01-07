<script context="module">
	export const keywords = ['math', 'div', 'divide', 'percent']
</script>

<script>
	import { Line, Circle } from 'p45'
	import { grid, SVG } from './shared'

	const radius = grid.HALF * 0.75
</script>

<SVG {...$$restProps} {grid}>
	<Circle origin={grid.n(8, 4)} {radius} ref="P44:MathDiv" />
	<Line from={grid.n(1, 8)} to={grid.n(15, 8)} />
	<Circle origin={grid.n(8, 12)} {radius} ref="P44:MathDiv" />
</SVG>
