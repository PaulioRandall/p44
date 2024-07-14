<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'
	import FlyingArrow from './private/FlyingArrow.svelte'

	//@component
	// Media control refresh symbol, Unicode U+1F504 (ISO/IEC 18035).
</script>

<SVG title="Media Control Refresh" {...$$restProps}>
	<FlyingArrow />
	<FlyingArrow transforms="flip xy" />
</SVG>
