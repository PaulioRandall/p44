<script>
	import { Path, M, L, Q, Line } from 'p45'
	import { grid } from '../shared'
</script>

<g stroke="burlywood" stroke-width="2">
	<Path
		d={[
			M(grid.n(3, 5)), //
			L(grid.n(1, 7, 0, 2)), //
			L(grid.n(3, 10)), //
		]} />
	<Path
		d={[
			M(grid.n(13, 5)), //
			L(grid.n(15, 7, 0, 2)), //
			L(grid.n(13, 10)), //
		]} />
	<Line from={grid.n(11, 11)} to={grid.n(12, 4, 1)} />
</g>
