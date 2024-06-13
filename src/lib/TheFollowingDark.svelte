<script>
	import { Line, Circle, Transform } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Mine sign: The Following Dark.
</script>

<SVG title="Mine sign: The Following Dark" {...$$restProps}>
	<Transform rotate="45">
		<Circle r="8" />
		<Line p="L2, L22" />
		<Line p="N2, N22" />
	</Transform>
</SVG>
