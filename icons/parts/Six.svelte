<script>
	import { Path, M, C } from 'p45'
	import { grid } from '../shared'

	export let origin = grid.center
</script>

<Path
	stroke-linecap="round"
	stroke-width="3"
	stroke="#DAA520"
	transform="translate({origin.x}, {origin.y})"
	d={[
		M(grid.n(4, 1, 2, -2)), //
		C(
			grid.n(1, 0), //
			grid.n(1, 4), //
			grid.n(1, 5, 1) //
		),
		C(
			grid.n(1, 6, 2, 3), //
			grid.n(4, 8, 2), //
			grid.n(5, 4) //
		),
		M(grid.n(6, 4, -2)),
		C(
			grid.n(6, 4), //
			grid.n(3, 2), //
			grid.n(0, 4, 2) //
		),
	]} />
