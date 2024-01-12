<script>
	import { Polygon, P45Util, P45RegPoly } from 'p45'
	import { grid, SVG, zipArrays } from './shared'

	//[doc:name] Star
	//[doc:alt] Star shape with a programmed number of legs and indent.
	//[doc:keywords] geometry, polygon, star

	//[doc:prop] legs is any whole number 3 or above, defaults to 5
	export let legs = 5

	//[doc:prop] indent is the distance up the leg to form inner corner between 0 and 1, defaults to 0.33
	export let indent = 0.33

	const makePoints = () => {
		let _legs = P45Util.parseNumber(legs)
		_legs = Math.round(_legs)

		let _ind = P45Util.parseNumber(indent)
		_ind = !!_ind && P45Util.within(_ind, 0, 1) ? _ind : 0.3

		const len = grid.center.x - grid.UNIT
		const tipCoords = P45RegPoly.points(_legs, len, {
			origin: grid.center,
			rotate: 180 / _legs,
		})

		const baseCoords = P45RegPoly.points(_legs, len * _ind, {
			origin: grid.center,
		})

		return zipArrays(tipCoords, baseCoords)
	}

	$: points = makePoints(legs, indent)
</script>

<SVG {...$$restProps} {grid}>
	<Polygon {points} />
</SVG>
