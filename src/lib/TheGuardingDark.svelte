<script>
	import { Circle } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// The Long Dark.
</script>

<SVG title="The Guarding Dark" {...$$restProps}>
	<Circle radius="8" />
	<Line nodes="J2, J22" />
	<Line nodes="L2, L22" />
	<Line nodes="N2, N22" />
	<Line nodes="P2, P22" />
</SVG>
