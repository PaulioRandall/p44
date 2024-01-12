<script>
	import { Path, M, C } from 'p45'
	import { grid, SVG } from './shared'
	import { BG, TheP, Four } from './parts'

	//[doc:name] P44
	//[doc:alt] Logo of the P44 icon library.
	//[doc:keywords] logo, p44
</script>

<SVG {...$$props} {grid}>
	<BG />
	<TheP />
	<Four origin={grid.n(10, 1)} />
	<Four origin={grid.n(10, 9)} />
</SVG>
