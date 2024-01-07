<script context="module">
	export const keywords = ['geometry', 'lines', 'cup']
</script>

<script>
	import { Path, M, L } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Path
		d={[
			M(grid.n(3, 1)), //
			L(grid.n(3, 15)), //
			L(grid.n(13, 15)), //
			L(grid.n(13, 1)), //
		]} />
</SVG>
