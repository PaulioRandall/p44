<script>
	import { Path, M, A } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Crescent
	//[doc:keywords] geometry, crescent, moon

	const r = grid.lenPx / 2
</script>

<SVG stroke-width="2" {...$$props} {grid}>
	<Path
		d={[
			M(grid.n(3, 3)),
			A(
				{ x: 18, y: 23 }, //
				grid.n(3, 13), //
				{ large: true, clockwise: true } //
			),
			M(grid.n(3, 3)),
			A(
				{ x: 25, y: 28 }, //
				grid.n(3, 13), //
				{ large: true, clockwise: true } //
			),
		]} />
</SVG>
