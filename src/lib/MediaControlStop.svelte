<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Media control stop symbol, Unicode U+23F9 (ISO 7000 / IEC 60417).
</script>

<SVG title="Media Control Stop" {...$$restProps}>
	<Shape
		draw="
move to C2
line to C22
line to W22
line to W2
close
	" />
</SVG>
