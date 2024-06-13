<script>
	import { Line, Circle, Polygon } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Mine sign: The Opening Dark.
</script>

<SVG title="Mine sign: The Opening Dark" {...$$restProps}>
	<mask id="the-opening-dark-mask">
		<Circle r="8" fill="white" />
		<Polygon p="K4, O4, O20, K20" fill="black" />
	</mask>

	<Line p="K2, K22" />
	<Line p="O2, O22" />
	<Circle r="8" fill="currentColor" mask="url(#the-opening-dark-mask)" />
</SVG>
