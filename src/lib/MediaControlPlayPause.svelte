<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'
	import HalfPlay from './private/HalfPlay.svelte'

	//@component
	// Media control play pause symbol, Unicode U+23EF (ISO/IEC 18035).
</script>

<SVG title="Media Control Fast Backward" {...$$restProps}>
	<HalfPlay />
	<Shape
		draw="
		move to N2
line to N22
line to R22
line to R2
close
	" />
	<Shape
		draw="
move to T2
line to T22
line to X22
line to X2
close
	" />
</SVG>
