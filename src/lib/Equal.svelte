<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// Equals symbol.
</script>

<SVG title="Equal" {...$$restProps}>
	<Line nodes="D8,V8" />
	<Line nodes="D16,V16" />
</SVG>
