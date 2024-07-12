<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Heart shape without using curves.
</script>

<SVG title="Edged Heart" {...$$restProps}>
	<Shape
		draw="
		move to C8
		line to G2
		line to M6
		line to S2
		line to W8
		line to M22
		close
	" />
</SVG>
