<script>
	import { Polygon, Circle, Path, M, L } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Chart
	//[doc:alt] Represents a coloured data chart, graph, plot, or data analytics.
	//[doc:keywords] chart, graph, plot, data, analytics, analysis
</script>

<SVG {...$$props} {grid}>
	<g stroke-width="0">
		<Polygon
			fill="forestgreen"
			points={[
				grid.n(1, 15), //
				grid.n(1, 11), //
				grid.n(3, 11, 3), //
				grid.n(3, 15, 3), //
			]} />
		<Polygon
			fill="goldenrod"
			points={[
				grid.n(5, 15, -1), //
				grid.n(5, 7, -1), //
				grid.n(7, 7, 2), //
				grid.n(7, 15, 2), //
			]} />
		<Polygon
			fill="mediumSlateblue"
			points={[
				grid.n(9, 15, -2), //
				grid.n(9, 9, -2), //
				grid.n(11, 9, 1), //
				grid.n(11, 15, 1), //
			]} />
		<Polygon
			fill="indianred"
			points={[
				grid.n(13, 15, -3), //
				grid.n(13, 5, -3), //
				grid.n(15, 5), //
				grid.n(15, 15), //
			]} />
	</g>
	<g stroke-width="0" fill="dodgerblue">
		<Circle radius="1" origin={grid.n(2, 6, 1)} />
		<Circle radius="1" origin={grid.n(6, 3, 0.5)} />
		<Circle radius="1" origin={grid.n(10, 5, -0.5)} />
		<Circle radius="1" origin={grid.n(14, 2, -1)} />
		<Path
			stroke-width="1.5"
			stroke="dodgerblue"
			fill="transparent"
			d={[
				M(grid.n(2, 6, 1)),
				L(grid.n(6, 3, 0.5)),
				L(grid.n(10, 5, -0.5)),
				L(grid.n(14, 2, -1)),
			]} />
	</g>
</SVG>
