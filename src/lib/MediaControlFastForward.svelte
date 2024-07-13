<script>
	import { Shape, Transform } from 'p45'
	import SVG from './private/SVG.svelte'
	import HalfPlay from './private/HalfPlay.svelte'

	//@component
	// Media control fast forward symbol, Unicode U+23E9 (ISO/IEC 18035).
</script>

<SVG title="Media Control Fast Forward" {...$$restProps}>
	<HalfPlay transforms="move right by 0.5" />
	<HalfPlay transforms="move right by 11.5" />
</SVG>
