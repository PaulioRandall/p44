<script>
	import { Line, Circle, Polygon } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// The Closing Dark.
</script>

<SVG title="The Closing Dark" {...$$restProps}>
	<mask id="the-closing-dark-mask">
		<Circle r="8.5" fill="black" />
		<Polygon p="K4, O4, O20, K20" stroke-width="0.1" fill="white" />
	</mask>

	<Line p="K2, K22" />
	<Line p="O2, O22" />
	<Circle r="8" />
	<Circle
		r="7.5"
		stroke="currentColor"
		fill="currentColor"
		mask="url(#the-closing-dark-mask)" />
</SVG>
