<script>
	import { Path, M, L } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Square Brackets
	//[doc:alt] Pair of square brackets used in maths and programming.
	//[doc:keywords] maths, programming, square brackets, array
</script>

<SVG {...$$props} {grid}>
	<Path
		d={[
			M(grid.n(6, 1)), //
			L(grid.n(2, 1, grid.HALF)), //
			L(grid.n(2, 15, grid.HALF)), //
			L(grid.n(6, 15)), //

			M(grid.n(10, 1)), //
			L(grid.n(14, 1, -grid.HALF)), //
			L(grid.n(14, 15, -grid.HALF)), //
			L(grid.n(10, 15)), //
		]} />
</SVG>
