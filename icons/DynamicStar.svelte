<script context="module">
	export const keywords = ['geometry', 'polygon', 'star']
</script>

<script>
	import { Polygon, Transform, P45Util, P45RegPoly } from 'p45'
	import { grid, SVG, zipArrays, offsetRegPoly } from './shared'

	export let legs = 5
	export let indent = 0.33

	legs = P45Util.parseNumber(legs)
	if (legs < 3) {
		throw new Error(`[P44:DynamicStar] need more legs: 3 <= ${legs}`)
	}

	indent = P45Util.parseNumber(indent)
	if (!P45Util.within(indent, 0, 1)) {
		throw new Error(
			`[P44:DynamicStar] indent out of bounds: 0 <= ${indent} <= 1`
		)
	}

	legs = Math.round(legs)
	export let offset = offsetRegPoly('P44:DynamicStar', legs)

	const len = grid.center.x - grid.UNIT

	const tipCoords = P45RegPoly.points(legs, len, {
		origin: grid.center,
		rotate: 180 / legs,
	})

	const baseCoords = P45RegPoly.points(legs, len * indent, {
		origin: grid.center,
	})

	const points = zipArrays(tipCoords, baseCoords)
</script>

<SVG {...$$restProps} {grid}>
	<Transform {offset}>
		<Polygon {points} />
	</Transform>
</SVG>
