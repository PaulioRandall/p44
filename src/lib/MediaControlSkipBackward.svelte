<script>
	import { Shape, Transform } from 'p45'
	import SVG from './private/SVG.svelte'
	import SkipForward from './private/SkipForward.svelte'

	//@component
	// Media control skip backward symbol, U+23EE (ISO 7000 / IEC 60417).
</script>

<SVG title="Media Control Skip Backward" {...$$restProps}>
	<Transform origin="center" transforms="rotate by 180">
		<SkipForward transforms="rotate by 180" />
	</Transform>
</SVG>
