<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Good old fashioned diamond shape.
</script>

<SVG title="Diamond" {...$$restProps}>
	<Shape
		draw="
		move to C12
		line to M2
		line to W12
		line to M22
		close" />
</SVG>
