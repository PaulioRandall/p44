<script context="module">
	export const keywords = ['media control', 'video', 'audio', 'repeat']
</script>

<script>
	import { Polygon, Path, M, L, C } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Path
		d={[
			M(grid.n(5, 13)),
			L(grid.n(3, 13)),
			C(
				grid.n(1, 13), //
				grid.n(1, 10), //
				grid.n(1, 10) //
			),
			L(grid.n(1, 6)),
			C(
				grid.n(1, 6), //
				grid.n(1, 3), //
				grid.n(3, 3) //
			),
			L(grid.n(6, 3)),
			L(grid.n(6, 1)), //
			L(grid.n(9, 3)), //
			L(grid.n(6, 5)), //
			L(grid.n(6, 3)), //
		]} />
	<Path
		d={[
			M(grid.n(11, 3)),
			L(grid.n(13, 3)),
			C(
				grid.n(15, 3), //
				grid.n(15, 6), //
				grid.n(15, 6) //
			),
			L(grid.n(15, 10)),
			C(
				grid.n(15, 10), //
				grid.n(15, 13), //
				grid.n(13, 13) //
			),
			L(grid.n(10, 13)),
			L(grid.n(10, 11)), //
			L(grid.n(7, 13)), //
			L(grid.n(10, 15)), //
			L(grid.n(10, 13)), //
		]} />
</SVG>
