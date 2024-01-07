<script context="module">
	export const keywords = [
		'math',
		'mul',
		'multiply',
		'asterisk',
		'star',
		'snow',
		'snowflake',
	]
</script>

<script>
	import { Line, P45RegPoly } from 'p45'
	import { grid, SVG } from './shared'

	const cx = grid.center.x
	const cy = grid.center.y
	const angle = P45RegPoly.internalAngle(3)
</script>

<SVG {...$$restProps} {grid}>
	<Line from={grid.n(1, 8)} to={grid.n(15, 8)} />
	<Line
		from={grid.n(1, 8)}
		to={grid.n(15, 8)}
		transform="rotate({angle}, {cx}, {cy})" />
	<Line
		from={grid.n(1, 8)}
		to={grid.n(15, 8)}
		transform="rotate({angle + angle}, {cx}, {cy})" />
</SVG>
