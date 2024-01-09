<script>
	import { Path, M, C } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Horseshoe
	//[doc:alt] Horseshoe curve using a single line.
	//[doc:keywords] horseshoe, curve, line
</script>

<SVG {...$$props} {grid}>
	<Path
		d={[
			M(grid.n(3, 1)),
			C(
				grid.n(-6, 20), //
				grid.n(22, 20), //
				grid.n(13, 1) //
			),
		]} />
</SVG>
