<script context="module">
	export const keywords = ['media control', 'video', 'audio', 'shuffle']
</script>

<script>
	import { Polygon, Path, M, L, C, S } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Path
		d={[
			M(grid.n(1, 3)),
			L(grid.n(2, 3)),
			C(
				grid.n(6, 3), //
				grid.n(6, 8), //
				grid.n(6, 8) //
			),
			S(
				grid.n(7, 13), //
				grid.n(10, 13) //
			),
			L(grid.n(12, 13)), //
			L(grid.n(12, 11)), //
			L(grid.n(15, 13)), //
			L(grid.n(12, 15)), //
			L(grid.n(12, 13)), //
		]} />
	<Path
		d={[
			M(grid.n(1, 13)),
			L(grid.n(2, 13)),
			C(
				grid.n(6, 13), //
				grid.n(6, 8), //
				grid.n(6, 8) //
			),
			S(
				grid.n(7, 3), //
				grid.n(10, 3) //
			),
			L(grid.n(12, 3)),
			L(grid.n(12, 1)), //
			L(grid.n(15, 3)), //
			L(grid.n(12, 5)), //
			L(grid.n(12, 3)), //
		]} />
</SVG>
