<script>
	import { Polygon, Transform, P45Util, P45RegPoly } from 'p45'
	import { grid, SVG, zipArrays, offsetRegPoly } from './shared'

	//[doc:name] Hira Shuriken
	//[doc:alt] Hira Shuriken is a type of Japanese throwing star.
	//[doc:keywords] geometry, polygon, hira shuriken, star, ninja, weapon, throw

	//[doc:prop] legs = Any whole number 3 or above, defaults to 4
	export let legs = 4

	//[doc:prop] indent = Distance up the leg to form inner corner between 0 and 1, defaults to 0.3
	export let indent = 0.3

	//[doc:prop] offset = amount to offset {x,y} by, defaults to calulated based on number of legs
	export let offset = null

	const makePoints = () => {
		let _legs = P45Util.parseNumber(legs)
		_legs = Math.round(_legs)

		let _ind = P45Util.parseNumber(indent)
		_ind = !!_ind && P45Util.within(_ind, 0, 1) ? _ind : 0.3

		const _off = offset || offsetRegPoly('[P44:DynamicHiraShuriken]', _legs)

		const len = grid.center.x
		const tipCoords = P45RegPoly.points(_legs, len, {
			origin: grid.center,
			rotate: 180 / _legs,
		})

		const baseCoords = P45RegPoly.points(_legs, len * _ind, {
			origin: grid.center,
			rotate: 135 / _legs,
		})

		return [zipArrays(tipCoords, baseCoords), off]
	}

	$: [points, off] = makePoints(legs, indent, offset)
</script>

<SVG {...$$restProps} {grid}>
	<Transform offset={off}>
		<Polygon {points} />
	</Transform>
</SVG>
