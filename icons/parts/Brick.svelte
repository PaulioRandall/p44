<script>
	import { Path, M, L, Q } from 'p45'
	import { grid } from '../shared'

	export let origin = grid.center
	const c = origin.coords
	const o = origin.off
</script>

<Path
	{...$$restProps}
	d={[
		M(grid.n(c.x, c.y, o.x + 2, o.y)),
		L(grid.n(c.x + 5, c.y, o.x + 2, o.y)),
		Q(
			grid.n(c.x + 6, c.y, o.x, o.y), //
			grid.n(c.x + 6, c.y, o.x, o.y + 2) //
		),
		L(grid.n(c.x + 6, c.y + 1, o.x, o.y)),
		Q(
			grid.n(c.x + 6, c.y + 1, o.x, o.y + 2), //
			grid.n(c.x + 5, c.y + 1, o.x + 2, o.y + 2) //
		),
		L(grid.n(c.x, c.y + 1, o.x + 2, o.y + 2)),
		Q(
			grid.n(c.x, c.y + 1, o.x, o.y + 2), //
			grid.n(c.x, c.y + 1, o.x, o.y) //
		),
		L(grid.n(c.x, c.y, o.x, o.y + 2)),
		Q(
			grid.n(c.x, c.y, o.x, o.y), //
			grid.n(c.x, c.y, o.x + 2, o.y) //
		),
	]} />
