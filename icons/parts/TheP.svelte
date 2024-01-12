<script>
	import { Path, M, C } from 'p45'
	import { grid } from '../shared'

	export let origin = grid.n(1, 1, 2)
</script>

<Path
	{...$$restProps}
	stroke-width="4"
	stroke="#DAA520"
	transform="translate({origin.x}, {origin.y})"
	d={[
		M(grid.n(0, 0)), //
		C(
			grid.n(2, 5, 2), //
			grid.n(2, 11, 2), //
			grid.n(0, 14) //
		),
		M(grid.n(0, 3, -2)),
		C(
			grid.n(10, -7), //
			grid.n(8, 10), //
			grid.n(0, 8) //
		),
	]} />
