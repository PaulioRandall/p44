<script>
	import { Path, M, C, L, Transform } from 'p45'
	import { grid, SVG } from '../shared'

	export let origin = { x: 0, y: 0 }
</script>

<Path
	{...$$props}
	stroke-width="0"
	fill="white"
	transform="translate({origin.x}, {origin.y})"
	d={[
		M(grid.n(1, 0)),
		C(
			grid.n(4, 2), //
			grid.n(5, 2), //
			grid.n(6, 2) //
		),
		C(
			grid.n(4, 8), //
			grid.n(0, 4), //
			grid.n(1, 0) //
		),
	]} />
<Path
	{...$$props}
	stroke-width="1"
	stroke="#050A23"
	fill="crimson"
	transform="translate({origin.x}, {origin.y})"
	d={[
		M(grid.n(3, 0, 2, 1)),
		C(
			grid.n(0, 4), //
			grid.n(6, 4), //
			grid.n(4, 1, 0, 0) //
		),
	]} />
