<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// Multiply or cross symbol.
</script>

<SVG title="Multiply" {...$$restProps}>
	<Line nodes="D3,V21" />
	<Line nodes="D21,V3" />
</SVG>
