<script>
	import { Line, Circle, Shape, Transform } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Mine sign: The Breathing Dark.
</script>

<SVG title="Mine sign: The Breathing Dark" {...$$restProps}>
	<Circle r="8" />
	<Shape p="J12, P12 Q M9, J12 Q M15" />
	<Transform rotate="90">
		<Line p="Q11, W8" />
		<Line p="Q12, W12" />
		<Line p="Q13, W16" />
	</Transform>
</SVG>
