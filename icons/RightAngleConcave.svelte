<script context="module">
	export const keywords = ['geometry', 'lines', 'angle']
</script>

<script>
	import { Path, M, L } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Path
		d={[
			M(grid.n(1, 8)), //
			L(grid.n(8, 8)), //
			L(grid.n(8, 1)), //
		]} />
</SVG>
