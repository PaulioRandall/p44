<script>
	import { Line, Circle, Shape } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Mine sign: The Summoning Dark.
</script>

<SVG title="Mine sign: The Summoning Dark" {...$$restProps}>
	<Circle o="M9" r="7" />
	<Shape p="J9, P9 Q M6, J9 Q M12" />
	<Circle o="M9" r="1" />
	<Line p="M16, M23 C P20 P23, M19 C H23 H16, T18 Q P20" />
	<Line p="T18, Q17" stroke-linecap="round" />
	<Line p="T18, R21" stroke-linecap="round" />
</SVG>
