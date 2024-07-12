<script>
	import { Circle, Shape } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// The Summoning Dark.
</script>

<SVG title="The Summoning Dark" {...$$restProps}>
	<Circle origin="M9" radius="7" />
	<Shape
		draw="
	move to J9
	quad curve to P9 control with M6
	quad curve to J9 control with M12
	" />
	<Circle origin="M9" radius="0.5" stroke-width="0.5" />
	<Shape
		draw="
	move to M16
	curve to M23 control with P20 and P23
	curve to M19 control with H23 and H16
	quad curve to T18 control with P20" />
	<Line nodes="T18, Q17" stroke-linecap="round" />
	<Line nodes="T18, R21" stroke-linecap="round" />
</SVG>
