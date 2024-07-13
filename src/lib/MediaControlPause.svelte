<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Media control pause symbol, Unicode U+23F8 (ISO/IEC 18035).
</script>

<SVG title="Media Control Pause" {...$$restProps}>
	<Shape
		draw="
move to E2
line to E22
line to K22
line to K2
close
	" />
	<Shape
		draw="
move to O2
line to O22
line to U22
line to U2
close
	" />
</SVG>
