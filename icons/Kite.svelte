<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Kite
	//[doc:alt] Kite shape using a single polygon.
	//[doc:keywords] geometry, polygon, kite, quadrilateral
</script>

<SVG {...$$props} {grid}>
	<Polygon
		points={[
			grid.n(1, 5), //
			grid.n(8, 1), //
			grid.n(15, 5), //
			grid.n(8, 15), //
		]} />
</SVG>
