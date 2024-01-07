<script context="module">
	export const keywords = ['geometry', 'polygon']
</script>

<script>
	import { RegularPolygon, Transform, P45Util, P45RegPoly } from 'p45'
	import { grid, SVG, offsetRegPoly } from './shared'

	export let sides = 5
	export let offset = offsetRegPoly('P44:DynamicRegularPolygon', sides)
</script>

<SVG {...$$restProps} {grid}>
	<Transform {offset}>
		<RegularPolygon {sides} />
	</Transform>
</SVG>
