<script>
	import { Line, Circle } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Analogue clock face.
</script>

<SVG title="Clock" {...$$restProps}>
	<Circle r="10" />
	<Circle r="1" />
	<Line p="L11, H8" />
	<Line p="N11, S6" />
</SVG>
