<script>
	import { Polygon, P45Util, P45RegPoly } from 'p45'
	import { grid, SVG, zipArrays } from './shared'

	//[doc:name] Hira Shuriken
	//[doc:alt] Hira Shuriken is a type of Japanese throwing star.
	//[doc:keywords] geometry, polygon, hira shuriken, star, ninja, weapon, throw

	//[doc:prop] legs as any whole number 3 or above, defaults to 4
	export let legs = 4

	//[doc:prop] indent is the distance up the leg to form inner corner between 0 and 1, defaults to 0.3
	export let indent = 0.3

	const makePoints = () => {
		let _legs = P45Util.parseNumber(legs)
		_legs = Math.round(_legs)

		let _ind = P45Util.parseNumber(indent)
		_ind = !!_ind && P45Util.within(_ind, 0, 1) ? _ind : 0.3

		const len = grid.center.x
		const tipCoords = P45RegPoly.points(_legs, len, {
			origin: grid.center,
			rotate: 180 / _legs,
		})

		const baseCoords = P45RegPoly.points(_legs, len * _ind, {
			origin: grid.center,
			rotate: 135 / _legs,
		})

		return zipArrays(tipCoords, baseCoords)
	}

	$: points = makePoints(legs, indent)
</script>

<SVG {...$$restProps} {grid}>
	<Polygon {points} />
</SVG>
