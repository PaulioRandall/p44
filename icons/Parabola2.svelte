<script context="module">
	export const keywords = ['geometry', 'lines', 'parabola', 'bowl']
</script>

<script>
	import { Path, M, C } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Path
		d={[
			M(grid.n(1, 6)), //
			C(
				grid.n(4, 12), //
				grid.n(12, 12), //
				grid.n(15, 6) //
			),
		]} />
</SVG>
