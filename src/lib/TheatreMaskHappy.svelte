<script>
	import { Shape, Circle } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Happy theatre mask.
</script>

<SVG title="Theatre Mask (Happy)" {...$$restProps}>
	<Shape
		draw="
move to U2
quad curve to M22 control with V16
quad curve to E2 control with D16
quad curve to U2 control with M8
close
	" />
	<Shape
		draw="
move to G9
curve to K9 control with I6
move to S9
curve to O9 control with Q6
move to J15
curve to P15 control with M20
	" />
</SVG>
