<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// Plus or cross symbol.
</script>

<SVG title="Plus" {...$$restProps}>
	<Line nodes="M2,M22" />
	<Line nodes="C12,W12" />
</SVG>
