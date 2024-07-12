<script>
	import { Shape, Transform } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Generic predator animal face using simple straight lines.
</script>

<SVG title="Predator" {...$$restProps}>
	<Shape
		draw="
		move to C10
		line to D8
		line to D2
		line to I6
		line to M5
		line to Q6
		line to V2
		line to V8
		line to W10
		line to R20
		line to M22
		line to H20
		close
	" />

	<Shape
		draw="
		move to G10
		line to J10
		line to K11
		line to I12
		close
	" />

	<Transform origin="M12" transforms="flip x">
		<Shape
			draw="
			move to G10
			line to J10
			line to K11
			line to I12
			close
		" />
	</Transform>
</SVG>
