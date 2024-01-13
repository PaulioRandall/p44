<script>
	import { Path, M, C } from 'p45'
	import { grid } from '../shared'
</script>

<Path
	stroke-width="1"
	d={[
		M(grid.n(1, 1)),
		C(
			grid.n(2, 2), //
			grid.n(4, 2, 0, 2), //
			grid.n(5, 3) //
		),
		C(
			grid.n(4, 2, 0, 2), //
			grid.n(2, 5), //
			grid.n(1, 1) //
		),
	]} />
