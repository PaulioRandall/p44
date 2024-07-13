<script>
	import { Shape, Circle } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Conical Flask.
</script>

<SVG title="Conical Flask" {...$$restProps}>
	<Shape
		draw="
		move to J2
		line to J6
		quad curve to I9 control with J7
		line to D19
		quad curve to G22 control with C22
		line to S22
		quad curve to V19 control with W22
		line to Q9
		quad curve to P6 control with P7
		line to P2
	" />
	<Circle origin="J2" radius="0.15" />
	<Circle origin="P2" radius="0.15" />
</SVG>
