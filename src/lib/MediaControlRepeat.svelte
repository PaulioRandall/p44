<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'
	import HalfTurnaround from './private/HalfTurnaround.svelte'

	//@component
	// Media control repeat symbol, Unicode U+1F501 (ISO/IEC 18035).
</script>

<SVG title="Media Control Repeat" {...$$restProps}>
	<HalfTurnaround />
	<HalfTurnaround transforms="flip xy" />
</SVG>
