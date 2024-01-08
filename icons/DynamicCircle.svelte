<script>
	import { Circle } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Dymanic Circle
	//[doc:keywords] geometry, circle, dot, round
	//[doc:prop] radius = Any positive number (grid radius is 8)
	export let radius = 7
</script>

<SVG {...$$restProps} {grid}>
	<Circle {radius} />
</SVG>
