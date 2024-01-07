<script context="module">
	export const keywords = ['geometry', 'lines', 'parabola', 'cup']
</script>

<script>
	import { Arc } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Arc
		from={grid.n(2, 3)}
		to={grid.n(14, 3)}
		radius={{
			x: grid.HALF, //
			y: grid.HALF + 1.5, //
		}} />
</SVG>
