<script>
	import { Line, Circle, Polygon } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Mine sign: The Closing Dark.
</script>

<SVG title="Mine sign: The Closing Dark" {...$$restProps}>
	<mask id="the-closing-dark-mask">
		<Circle r="8" fill="black" />
		<Polygon p="K4, O4, O20, K20" fill="white" />
	</mask>

	<Line p="K2, K22" />
	<Line p="O2, O22" />
	<Circle r="8" fill="currentColor" mask="url(#the-closing-dark-mask)" />
</SVG>
