<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Right Angle Triangle
	//[doc:keywords] geometry, polygon, triangle, parabola
</script>

<SVG {...$$props} {grid}>
	<Polygon
		points={[
			grid.n(1, 1), //
			grid.n(15, 15), //
			grid.n(1, 15), //
		]} />
</SVG>
