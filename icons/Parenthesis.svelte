<script>
	import { Path, J, M, A } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Parenthesis
	//[doc:keywords] math, parenthesis, round brackets
</script>

<SVG {...$$props} {grid}>
	<Path
		d={J(
			M(grid.n(6, 1)),
			A(
				{ x: 40, y: 40 },
				grid.n(6, 15) //
			),
			M(grid.n(10, 1)),
			A(
				{ x: 40, y: 40 },
				grid.n(10, 15), //
				{ clockwise: true } //
			)
		)} />
</SVG>
