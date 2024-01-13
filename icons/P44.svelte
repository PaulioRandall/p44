<script>
	import { grid, SVG } from './shared'
	import { BG, Four, Grin } from './parts'

	//[doc:name] P44
	//[doc:alt] Logo of the P44 icon library.
	//[doc:keywords] logo, p44
</script>

<SVG {...$$props} {grid}>
	<BG />
	<Grin />
	<Four origin={grid.n(1, 1, 2, 2)} />
	<Four origin={grid.n(10, 1, -2, 2)} />
</SVG>
