<script>
	import { Polygon, Line } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Good old fashioned cut diamond shape.
</script>

<SVG stroke-width="0.8" title="Cut Diamond" {...$$restProps}>
	<Polygon p="C8, H2, R2, W8, M22" />
	<Line p="C8, W8" />
	<Line p="H2, F8, M22" />
	<Line p="H2, K8" />
	<Line p="M2, K8, M22" />
	<Line p="M2, O8" />
	<Line p="R2, O8, M22" />
	<Line p="R2, T8, M22" />
</SVG>
