<script>
	import { Path, M, C, Line } from 'p45'
	import { grid } from '../shared'
</script>

<Path
	stroke-width="0"
	fill="white"
	d={[
		M(grid.n(1, 9)),
		C(
			grid.n(3, 13), //
			grid.n(13, 13), //
			grid.n(15, 9) //
		),
		C(
			grid.n(13, 17), //
			grid.n(3, 17), //
			grid.n(1, 9) //
		),
	]} />
<g stroke="#050A23" stroke-width="1">
	<Path
		d={[
			M(grid.n(1, 9)),
			C(
				grid.n(3, 15), //
				grid.n(13, 15), //
				grid.n(15, 9) //
			),
		]} />
	<Line from={grid.n(3, 10)} to={grid.n(3, 13)} />
	<Line from={grid.n(5, 11)} to={grid.n(5, 15)} />
	<Line from={grid.n(7, 12)} to={grid.n(7, 15)} />
	<Line from={grid.n(9, 12)} to={grid.n(9, 15)} />
	<Line from={grid.n(11, 11)} to={grid.n(11, 15)} />
	<Line from={grid.n(13, 10)} to={grid.n(13, 13)} />
</g>
