<script>
	import { Shape, Transform } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Media control skip forward symbol, U+23ED (ISO 7000 / IEC 60417).
</script>

<SVG title="Media Control Skip Forward" {...$$restProps}>
	<Shape
		draw="
move to B2
line to B22
line to K12
close
	" />
	<Shape
		draw="
move to L2
line to L22
line to U12
close
	" />
	<Shape
		draw="
move to V1
line to V23
line to X23
line to X1
close
	" />
</SVG>
