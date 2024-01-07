<script context="module">
	export const keywords = ['things', 'clock', 'time']
</script>

<script>
	import { Line, Circle } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG stroke-linecap="round" {...$$restProps} {grid}>
	<Circle radius="7" ref="P44:Clock" />
	<Line from={grid.center} to={grid.n(5, 5)} />
	<Line from={grid.center} to={grid.n(12, 4)} />
</SVG>
