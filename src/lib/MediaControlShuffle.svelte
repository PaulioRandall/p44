<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'
	import SwitchingLanes from './private/SwitchingLanes.svelte'

	//@component
	// Media control shuffle symbol, Unicode U+1F500 (ISO/IEC 18035).
</script>

<SVG title="Media Control Shuffle" {...$$restProps}>
	<SwitchingLanes />
	<SwitchingLanes transforms="flip y" />
</SVG>
