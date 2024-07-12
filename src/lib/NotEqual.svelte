<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// Not equal symbol.
</script>

<SVG title="Not Equal" {...$$restProps}>
	<Line nodes="D9,V9" />
	<Line nodes="D15,V15" />
	<Line nodes="G21,S3" />
</SVG>
