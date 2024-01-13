<script>
	import { Path, M, C } from 'p45'
	import { grid } from '../shared'

	export let origin = grid.n(1, 5)
</script>

<Path
	transform="translate({origin.x}, {origin.y})"
	stroke-width="0"
	fill="white"
	d={[
		M(grid.n(0, 1)),
		C(
			grid.n(2, 4), //
			grid.n(3, 0), //
			grid.n(5, 6) //
		),
		C(
			grid.n(3, 2, 0, 3), //
			grid.n(1, 6, 0, 2), //
			grid.n(0, 1) //
		),
	]} />
