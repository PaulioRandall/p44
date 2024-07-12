<script>
	import { Circle } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// The Long Dark.
</script>

<SVG title="The Long Dark" {...$$restProps}>
	<Circle radius="8" />
	<Line nodes="C12, W12" />
</SVG>
