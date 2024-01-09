<script>
	import { RegularPolygon } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Hexagon
	//[doc:alt] Six sided regular polygon.
	//[doc:keywords] geometry, polygon, regular, hexagon
</script>

<SVG {...$$props} {grid}>
	<RegularPolygon sides={6} />
</SVG>
