<script>
	import { Path, M, C } from 'p45'
	import { grid } from '../shared'

	export let origin = grid.center
</script>

<Path
	{...$$restProps}
	stroke-width="4"
	stroke="#DAA520"
	transform="translate({origin.x}, {origin.y})"
	d={[
		M(grid.n(4, 6, 0, 2)), //
		C(
			grid.n(3, 5, 1), //
			grid.n(3, 2, 1), //
			grid.n(4, 0) //
		),
		C(
			grid.n(2, 1), //
			grid.n(0, 3, 2), //
			grid.n(0, 5, 0, 2) //
		),
		C(
			grid.n(1, 4, 2, 3), //
			grid.n(3, 4, 0, 0), //
			grid.n(5, 4, 0, 2) //
		),
	]} />
