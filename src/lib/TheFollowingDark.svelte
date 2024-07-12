<script>
	import { Circle, Transform } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// The Following Dark.
</script>

<SVG title="The Following Dark" {...$$restProps}>
	<Transform transforms="rotate by 45">
		<Circle radius="8" />
		<Line nodes="L2, L22" />
		<Line nodes="N2, N22" />
	</Transform>
</SVG>
