<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// Good old fashioned cut diamond shape.
</script>

<SVG stroke-width="0.8" title="Cut Diamond" {...$$restProps}>
	<Shape
		draw="
		move to C8
		line to H2
		line to R2
		line to W8
		line to M22
		close" />
	<Line nodes="C8, W8" />
	<Line nodes="H2, F8, M22" />
	<Line nodes="H2, K8" />
	<Line nodes="M2, K8, M22" />
	<Line nodes="M2, O8" />
	<Line nodes="R2, O8, M22" />
	<Line nodes="R2, T8, M22" />
</SVG>
