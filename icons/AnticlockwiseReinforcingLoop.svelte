<script>
	import { grid, SVG } from './shared'
	import { LoopArrow, CenterChar } from './parts'

	//[doc:name] Anticlockwise Reinforcing Loop
	//[doc:alt] Anticlockwise reinforcing loop symbol used in causal loop diagrams.
	//[doc:keywords] loop, arrow, reinforcing, causal loop diagram
</script>

<SVG {...$$props} {grid}>
	<LoopArrow />
	<CenterChar char="R" />
</SVG>
