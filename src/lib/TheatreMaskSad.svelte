<script>
	import { Shape, Circle } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Sad theatre mask.
</script>

<SVG title="Theatre Mask (Sad)" {...$$restProps}>
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
move to G8
curve to K8 control with I11
move to S8
curve to O8 control with Q11
move to P16
curve to J16 control with M12
	" />
</SVG>
