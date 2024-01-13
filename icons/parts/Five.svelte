<script>
	import { Path, M, C } from 'p45'
	import { grid } from '../shared'

	export let origin = grid.center
</script>

<Path
	stroke-width="3"
	stroke="#DAA520"
	transform="translate({origin.x}, {origin.y})"
	d={[
		M(grid.n(4, 0, 2)), //
		C(
			grid.n(4, 1), //
			grid.n(1, 1), //
			grid.n(0, 0) //
		),
		C(
			grid.n(1, 1, -2), //
			grid.n(1, 2, -2), //
			grid.n(0, 3) //
		),
		C(
			grid.n(6, 1), //
			grid.n(6, 8), //
			grid.n(0, 6, -2) //
		),
	]} />
