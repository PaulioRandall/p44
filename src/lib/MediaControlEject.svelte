<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Media control eject symbol, Unicode U+23CF (ISO 7000 / IEC 60417).
</script>

<SVG title="Media Control Eject" {...$$restProps}>
	<Shape
		draw="
move to C16
line to M2
line to W16
close
	" />
	<Shape
		draw="
move to B18
line to X18
line to X23
line to B23
close
	" />
</SVG>
