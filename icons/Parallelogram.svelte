<script>
	import { Polygon, P45Util } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Parallelogram
	//[doc:keywords] geometry, polygon, parallelogram, quadrilateral

	//[doc:prop] slope = Slope angle in degrees, negative for left leaning, defaults to 15
	export let slope = 20

	const halfGridLen = grid.UNIT * 8
	const degToRad = (deg) => deg * (Math.PI / 180)
	$: offX = Math.tan(degToRad(slope)) * halfGridLen
</script>

<SVG {...$$restProps} {grid}>
	<Polygon
		transform="skewX({-slope}) translate({offX}, 0)"
		points={[grid.n(3, 3), grid.n(13, 3), grid.n(13, 13), grid.n(3, 13)]} />
</SVG>
