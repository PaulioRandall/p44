<script>
	import { Circle } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// Division symbol.
</script>

<SVG title="Divide" {...$$restProps}>
	<Line nodes="C12,W12" />
	<Circle origin="M6" radius="3" />
	<Circle origin="M18" radius="3" />
</SVG>
