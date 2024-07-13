<script>
	import { Shape, Circle } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Evil smiling theatre mask.
</script>

<SVG title="Theatre Mask (Evil)" {...$$restProps}>
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
move to R8
curve to O10 control with R10
move to H8
curve to K10 control with H10
move to I14
curve to Q14 control with M21
	" />
</SVG>
