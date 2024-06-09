<script>
	import { Polygon, Line, Transform } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Generic predator animal face using simple straight lines.
</script>

<SVG title="Predator" {...$$restProps}>
	<Polygon p="C10, D8, D2, I6, M5, Q6, V2, V8, W10, R20, M22, H20" />

	<Polygon p="G10, J10, K11, I12" />

	<Transform origin="M12" flipX>
		<Polygon p="G10, J10, K11, I12" />
	</Transform>
</SVG>
