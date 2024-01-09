<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Edged Diamond
	//[doc:alt] Diamond shape without curves.
	//[doc:keywords] geometry, polygon, diamond, edged
</script>

<SVG {...$$props} {grid}>
	<Polygon
		points={[
			grid.n(1, 4),
			grid.n(5, 1),
			grid.n(11, 1),
			grid.n(15, 4),
			grid.n(8, 15),
		]} />
</SVG>
