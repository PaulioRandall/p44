<script>
	import { Arc, Line } from 'p45'
	import { grid } from '../shared'
</script>

<g stroke-width="3">
	<Arc
		from={grid.n(14, 11, 2)}
		to={grid.n(14, 5, 2)}
		radius={{ x: 28, y: 28 }}
		large
		clockwise />
	<Line
		stroke-linecap="round"
		from={grid.n(14, 11, 2)}
		to={grid.n(15, 14, 0, -1)} />
	<Line
		stroke-linecap="round"
		from={grid.n(14, 11, 2)}
		to={grid.n(11, 11, 3, 3)} />
</g>
