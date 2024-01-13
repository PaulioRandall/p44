<script>
	import { Path, M, C } from 'p45'
	import { grid } from '../shared'
</script>

<Path
	{...$$props}
	stroke-width="0"
	d={[
		M(grid.n(1, 1)),
		C(
			grid.n(1, 2, 2, 2), //
			grid.n(4, 3), //
			grid.n(6, 3, 1) //
		),
		C(
			grid.n(5, 3, 3, 2), //
			grid.n(5, 4, 2), //
			grid.n(5, 6) //
		),
		C(
			grid.n(4, 5, 0, 2), //
			grid.n(0, 4), //
			grid.n(1, 1) //
		),
	]} />
