<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Hexagram or Star of David.
</script>

<SVG title="Hexagram" {...$$restProps}>
	<Shape
		draw="
move to H3
line to H21
line to W12
close
	" />
	<Shape
		draw="
move to R3
line to R21
line to C12
close
	" />
</SVG>
