<script>
	import { RegularPolygon, Transform } from 'p45'
	import { grid, SVG, offsetRegPoly } from './shared'

	//[doc:name] Regular Polygon
	//[doc:keywords] geometry, polygon, regular

	//[doc:prop] sides is the number of sides as positive integer greater than 2, defaults to 5
	export let sides = 5

	//[doc:prop] offset is the amount to offset {x,y} by, defaults to calulated based on number of sides
	export let offset = null

	$: s = Math.round(sides)
	$: o = offset || offsetRegPoly('P44:DynamicRegularPolygon', s)
</script>

<SVG {...$$restProps} {grid}>
	<Transform offset={o}>
		<RegularPolygon sides={s} />
	</Transform>
</SVG>
