<script>
	import { RegularPolygon, Transform } from 'p45'
	import { grid, SVG, offsetRegPoly } from './shared'

	//[doc:name] Dymanic Regular Polygon
	//[doc:keywords] geometry, polygon, regular

	//[doc:prop] sides = number of sides as positive integer, defaults to 5
	export let sides = 5

	//[doc:prop] offset = amount to offset x & y by, defaults to calulated based on number of sides
	export let offset = null

	$: s = Math.round(sides)
	$: o = offset || offsetRegPoly('P44:DynamicRegularPolygon', s)
</script>

<SVG {...$$restProps} {grid}>
	<Transform offset={o}>
		<RegularPolygon sides={s} />
	</Transform>
</SVG>
