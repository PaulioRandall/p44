<script>
	import { Path, M, A } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Curly Braces
	//[doc:alt] Pair of curly braces used in maths and programming.
	//[doc:keywords] maths, programming, braces, brackets, object
</script>

<SVG {...$$props} {grid}>
	<Path
		d={[
			M(grid.n(7, 1, -grid.HALF)),
			A(
				{ x: 10, y: 10 }, //
				grid.n(4, 4, 0) //
			),
			A(
				{ x: 12, y: 12 }, //
				grid.n(1, 8), //
				{ clockwise: true } //
			),
			A(
				{ x: 12, y: 12 }, //
				grid.n(4, 12, 0), //
				{ clockwise: true } //
			),
			A(
				{ x: 10, y: 10 }, //
				grid.n(7, 15, -grid.HALF) //
			),
		]} />
	<Path
		d={[
			M(grid.n(9, 1, grid.HALF)),
			A(
				{ x: 10, y: 10 }, //
				grid.n(12, 4, 0), //
				{ clockwise: true } //
			),
			A(
				{ x: 12, y: 12 }, //
				grid.n(15, 8) //
			),
			A(
				{ x: 12, y: 12 }, //
				grid.n(12, 12) //
			),
			A(
				{ x: 10, y: 10 }, //
				grid.n(9, 15, grid.HALF), //
				{ clockwise: true } //
			),
		]} />
</SVG>
