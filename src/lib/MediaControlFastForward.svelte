<script>
	import { Shape, Transform } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Media control fast forward symbol, Unicode U+23E9 (ISO/IEC 18035).
</script>

<SVG title="Media Control Fast Forward" {...$$restProps}>
	<Transform
		transforms="
		move right by 0.5
	">
		<Shape
			draw="
move to B2
line to B22
line to L12
close
	" />
		<Shape
			draw="
move to M2
line to M22
line to W12
close
	" />
	</Transform>
</SVG>
