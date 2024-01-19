<script>
	import { Circle, Line } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Positive Bubble
	//[doc:alt] Plus symbol within a bubble.
	//[doc:keywords] plus, bubble, positive, causal loop diagram
</script>

<SVG {...$$props} {grid}>
	<Circle origin={grid.center} radius={7} />
	<Line from={grid.n(4, 8)} to={grid.n(12, 8)} />
	<Line from={grid.n(8, 4)} to={grid.n(8, 12)} />
</SVG>
