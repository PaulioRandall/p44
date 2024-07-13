<script>
	import { Shape, Transform } from 'p45'
	import SVG from './private/SVG.svelte'
	import HalfPlay from './private/HalfPlay.svelte'

	//@component
	// Media control fast backward (rewind) symbol, Unicode U+23EA (ISO/IEC 18035).
</script>

<SVG title="Media Control Fast Backward" {...$$restProps}>
	<Transform origin="center" transforms="rotate by 180">
		<HalfPlay transforms="move right by 0.5" />
		<HalfPlay transforms="move right by 11.5" />
	</Transform>
</SVG>
