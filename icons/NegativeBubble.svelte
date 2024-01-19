<script>
	import { Circle, Line } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Negative Bubble
	//[doc:alt] Minus symbol within a bubble.
	//[doc:keywords] minus, bubble, negative, causal loop diagram
</script>

<SVG {...$$props} {grid}>
	<Circle origin={grid.center} radius={7} />
	<Line from={grid.n(4, 8)} to={grid.n(12, 8)} />
</SVG>
