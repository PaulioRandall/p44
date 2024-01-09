<script>
	import { Polygon, Transform, P45Util, P45RegPoly } from 'p45'
	import { grid, SVG, zipArrays, offsetRegPoly } from './shared'

	//[doc:name] Dymanic Star
	//[doc:alt] Star shape with the number of legs set by the programmer.
	//[doc:keywords] geometry, polygon, star

	//[doc:prop] legs = Any whole number 3 or above, defaults to 5
	export let legs = 5

	//[doc:prop] indent = Distance up the leg to form inner corner between 0 and 1, defaults to 0.33
	export let indent = 0.33

	//[doc:prop] offset = amount to offset x & y by, defaults to calulated based on number of legs
	export let offset = null

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

		const off = offset || offsetRegPoly('[P44:DynamicStar]', _legs)
		return [zipArrays(tipCoords, baseCoords), off]
	}

	$: [points, off] = makePoints(legs, indent, offset)
</script>

<SVG {...$$restProps} {grid}>
	<Transform offset={off}>
		<Polygon {points} />
	</Transform>
</SVG>
