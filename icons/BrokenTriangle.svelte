<script>
	import { Path, M, L } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Broken Triangle
	//[doc:alt] A simple triangle broken at the top.
	//[doc:keywords] broken, triangle, musical instrument
</script>

<SVG {...$$props} {grid}>
	<Path
		d={[
			M(grid.n(6, 1, grid.HALF)), //
			L(grid.n(1, 15)), //
			L(grid.n(15, 15)), //
			L(grid.n(9, 1, grid.HALF)), //
		]} />
</SVG>
