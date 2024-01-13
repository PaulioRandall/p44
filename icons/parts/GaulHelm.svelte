<script>
	import { Circle, Path, M, C, L } from 'p45'
	import { grid } from '../shared'

	export let origin = grid.center
	export let base = 'grey'
	export let lining = '#5a5a5a'
</script>

<g transform="translate({origin.x}, {origin.y})">
	<Path
		stroke={lining}
		stroke-linecap="butt"
		stroke-width="1"
		fill={base}
		d={[
			M(grid.n(0, 7)),
			C(
				grid.n(0, 6), //
				grid.n(6, 6), //
				grid.n(6, 7) //
			),
			C(
				grid.n(6, 0), //
				grid.n(0, 0), //
				grid.n(0, 7) //
			),
		]} />

	<Path
		stroke={lining}
		stroke-linecap="butt"
		stroke-width="1"
		d={[
			M(grid.n(0, 6)),
			C(
				grid.n(0, 5), //
				grid.n(6, 5), //
				grid.n(6, 6) //
			),
		]} />

	<Path
		stroke={lining}
		stroke-linecap="butt"
		stroke-width="1"
		d={[
			M(grid.n(2, 5, 2, 1)), //
			L(grid.n(2, 1, 2, 3)), //
			M(grid.n(3, 5, 2, 1)), //
			L(grid.n(3, 1, 2, 3)), //
		]} />

	<g fill={lining} stroke-width="0">
		<Circle origin={grid.n(3, 2, 0, 2)} radius="0.25" />
		<Circle origin={grid.n(3, 4, 0, 1)} radius="0.25" />
		<Circle origin={grid.n(1, 6, 0, -0.25)} radius="0.25" />
		<Circle origin={grid.n(3, 6, 0, -1)} radius="0.25" />
		<Circle origin={grid.n(5, 6, 0, -0.25)} radius="0.25" />
	</g>
</g>
