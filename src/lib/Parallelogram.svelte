<script>
	import { Shape } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Simple parallelogram.
</script>

<SVG title="Parallelogram" {...$$restProps}>
	<Shape
		transforms="skew x by -15"
		draw="
			move to E4
			line to U4
			line to U20
			line to E20
			close
		" />
</SVG>
