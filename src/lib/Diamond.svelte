<script>
	import { Polygon } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Good old fashioned diamond shape.
</script>

<SVG title="Diamond" {...$$restProps}>
	<Polygon p="C12, M2, W12, M22" />
</SVG>
