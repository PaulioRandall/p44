<script>
	import { Transform } from 'p45'
	import { grid, SVG } from './shared'
	import { LoopArrow, CenterChar } from './parts'

	//[doc:name] Clockwise Balancing Loop
	//[doc:alt] Clockwise balancing loop symbol used in causal loop diagrams.
	//[doc:keywords] loop, arrow, balancing, causal loop diagram
</script>

<SVG {...$$props} {grid}>
	<Transform flipY>
		<LoopArrow />
	</Transform>
	<CenterChar char="B" />
</SVG>
