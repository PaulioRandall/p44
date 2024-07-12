<script>
	import { Shape, Circle } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Exclamation symbol.
</script>

<SVG title="Exclamation" {...$$restProps}>
	<Shape
		draw="
		move to K14
		line to J3
		quad curve to P3 control with M2
		line to O14
		quad curve to K14 control with M16
		close
	" />
	<Circle origin="M20" radius="2" />
</SVG>
