<script>
	import { grid, SVG } from './shared'
	import { LoopArrow, CenterChar } from './parts'

	//[doc:name] Anticlockwise Balancing Loop
	//[doc:alt] Anticlockwise balancing loop symbol used in causal loop diagrams.
	//[doc:keywords] loop, arrow, balancing, causal loop diagram
</script>

<SVG {...$$props} {grid}>
	<LoopArrow />
	<CenterChar char="B" />
</SVG>
