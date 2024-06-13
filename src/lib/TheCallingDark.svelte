<script>
	import { Line, Circle, Shape } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Mine sign: The Calling Dark.
</script>

<SVG title="Mine sign: The Calling Dark" {...$$restProps}>
	<Circle r="8" />
	<Shape p="J12, P12 Q M9, J12 Q M15" />
	<Line p="Q11, W8" />
	<Line p="Q12, W12" />
	<Line p="Q13, W16" />
</SVG>
