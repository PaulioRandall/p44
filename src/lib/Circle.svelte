<script>
	import { Circle } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Good old fashioned circle.

	//@prop origin
	// Circle center point.
	// @default "M12"
	// @alias o
	export let o = 'M12'
	export let origin = o

	//@prop radius
	// Radius from the center
	// @default 10
	// @alias r
	export let r = 10
	export let radius = r
</script>

<SVG title="Circle" {...$$restProps}>
	<Circle {origin} {radius} />
</SVG>
