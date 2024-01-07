<script context="module">
	export const keywords = [
		'geometry',
		'polygon',
		'hirashuriken',
		'star',
		'ninja',
		'weapon',
		'throw',
	]
</script>

<script>
	import { Polygon, Transform, P45Util, P45RegPoly } from 'p45'
	import { grid, SVG, zipArrays, offsetRegPoly } from './shared'

	export let legs = 4
	export let indent = 0.3

	legs = P45Util.parseNumber(legs)
	if (legs < 3) {
		throw new Error(`[P44:DynamicHiraShuriken] need more legs: 3 <= ${legs}`)
	}

	indent = P45Util.parseNumber(indent)
	if (!P45Util.within(indent, 0, 1)) {
		throw new Error(
			`[P44:DynamicHiraShuriken] indent out of bounds: 0 <= ${legs} <= 1`
		)
	}

	export let offset = offsetRegPoly('[P44:DynamicHiraShuriken]', legs)

	const len = grid.center.x
	const tipCoords = P45RegPoly.points(legs, len, {
		origin: grid.center,
		rotate: 180 / legs,
	})
	const baseCoords = P45RegPoly.points(legs, len * indent, {
		origin: grid.center,
		rotate: 135 / legs,
	})
	const points = zipArrays(tipCoords, baseCoords)
</script>

<SVG {...$$restProps} {grid}>
	<Transform {offset}>
		<Polygon {points} />
	</Transform>
</SVG>
