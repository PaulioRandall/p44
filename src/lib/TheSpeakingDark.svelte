<script>
	import { Circle, Shape } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// The Speaking Dark.
</script>

<SVG title="The Speaking Dark" {...$$restProps}>
	<Circle radius="8" />
	<Shape
		draw="
	move to J12
	quad curve to P12 control with M9
	quad curve to J12 control with M15
	close
	"
		fill="currentColor" />
</SVG>
