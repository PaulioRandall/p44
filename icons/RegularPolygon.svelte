<script>
	import { RegularPolygon } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Regular Polygon
	//[doc:keywords] geometry, polygon, regular

	//[doc:prop] sides is the number of sides as positive integer greater than 2, defaults to 5
	export let sides = 5

	$: s = Math.round(sides)
</script>

<SVG {...$$restProps} {grid}>
	<RegularPolygon sides={s} />
</SVG>
