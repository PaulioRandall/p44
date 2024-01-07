<script context="module">
	export const keywords = ['geometry', 'lines', 'horseshoe']
</script>

<script>
	import { Path, M, C } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Path
		d={[
			M(grid.n(3, 1)),
			C(
				grid.n(-6, 20), //
				grid.n(22, 20), //
				grid.n(13, 1) //
			),
		]} />
</SVG>
