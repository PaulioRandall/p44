<script>
	import { Circle, Shape } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// The Closing Dark.
</script>

<SVG title="The Closing Dark" {...$$restProps}>
	<mask id="the-closing-dark-mask">
		<Circle radius="8.5" fill="black" />
		<Line close nodes="K4, O4, O20, K20" stroke-width="0.1" fill="white" />
	</mask>

	<Line nodes="K2, K22" />
	<Line nodes="O2, O22" />
	<Circle radius="8" />
	<Circle
		radius="7.5"
		stroke="currentColor"
		fill="currentColor"
		mask="url(#the-closing-dark-mask)" />
</SVG>
