<script>
	import { Circle } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// The Opening Dark.
</script>

<SVG title="The Opening Dark" {...$$restProps}>
	<mask id="the-opening-dark-mask">
		<Circle radius="8.5" fill="white" />
		<Line close nodes="K4, O4, O20, K20" fill="black" />
	</mask>

	<Line nodes="K2, K22" />
	<Line nodes="O2, O22" />
	<Circle radius="8" />
	<Circle radius="7.5" fill="currentColor" mask="url(#the-opening-dark-mask)" />
</SVG>
