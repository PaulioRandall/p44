<script>
	import { Polygon } from 'p45'
	import SVG from './private/SVG.svelte'

	//@component
	// Heart shape without using curves.
</script>

<SVG title="Edged Heart" {...$$restProps}>
	<Polygon p="C8, G2, M6, S2, W8, M22" />
</SVG>
