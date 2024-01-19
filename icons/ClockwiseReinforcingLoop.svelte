<script>
	import { Transform } from 'p45'
	import { grid, SVG } from './shared'
	import { LoopArrow, CenterChar } from './parts'

	//[doc:name] Clockwise Reinforcing Loop
	//[doc:alt] Clockwise reinforcing loop symbol used in causal loop diagrams.
	//[doc:keywords] loop, arrow, reinforcing, causal loop diagram
</script>

<SVG {...$$props} {grid}>
	<Transform flipY>
		<LoopArrow />
	</Transform>
	<CenterChar char="R" />
</SVG>
