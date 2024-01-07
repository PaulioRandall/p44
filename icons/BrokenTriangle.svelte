<script context="module">
	export const keywords = ['geometry', 'lines', 'triangle']
</script>

<script>
	import { Path, M, L } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Path
		d={[
			M(grid.n(6, 1, grid.HALF)), //
			L(grid.n(1, 15)), //
			L(grid.n(15, 15)), //
			L(grid.n(9, 1, grid.HALF)), //
		]} />
</SVG>
