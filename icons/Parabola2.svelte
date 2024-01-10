<script>
	import { Path, M, C } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Parabola2
	//[doc:keywords] geometry, line, curve, parabola
</script>

<SVG {...$$props} {grid}>
	<Path
		d={[
			M(grid.n(1, 6)), //
			C(
				grid.n(4, 12), //
				grid.n(12, 12), //
				grid.n(15, 6) //
			),
		]} />
</SVG>
