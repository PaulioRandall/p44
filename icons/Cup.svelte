<script>
	import { Path, M, L } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Cup
	//[doc:alt] Abstract cup shape without a handle.
	//[doc:keywords] U shape, cup
</script>

<SVG {...$$props} {grid}>
	<Path
		d={[
			M(grid.n(3, 1)), //
			L(grid.n(3, 15)), //
			L(grid.n(13, 15)), //
			L(grid.n(13, 1)), //
		]} />
</SVG>
