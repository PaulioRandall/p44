<script>
	import { Circle } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// Analogue clock face.
</script>

<SVG title="Clock" {...$$restProps}>
	<Circle radius="10" />
	<Circle radius="1" />
	<Line nodes="L11,H8" />
	<Line nodes="N11,S6" />
</SVG>
