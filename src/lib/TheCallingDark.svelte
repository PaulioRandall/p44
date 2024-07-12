<script>
	import { Circle, Shape } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// The Calling Dark.
</script>

<SVG title="The Calling Dark" {...$$restProps}>
	<Circle radius="8" />
	<Shape
		draw="
	move to J12
	quad curve to P12 control with M9
	quad curve to J12 control with M15
	close
	" />
	<Line nodes="Q11, W8" />
	<Line nodes="Q12, W12" />
	<Line nodes="Q13, W16" />
</SVG>
