<script>
	import { Circle, Path, M, C, L } from 'p45'
	import { grid, SVG } from './shared'
	import { BG, Four, Five, Horns, GaulHelm } from './parts'

	//[doc:name] P45
	//[doc:alt] Logo of the P45 icon creation library.
	//[doc:keywords] logo, p45
</script>

<SVG {...$$props} {grid}>
	<mask id="p44-p45-mask">
		<Circle origin={grid.n(8, 6)} radius="6" fill="white" />
	</mask>
	<BG />
	<Horns fill="crimson" />
	<Horns fill="white" mask="url(#p44-p45-mask)" />
	<GaulHelm origin={grid.n(5, 0)} />
	<Four origin={grid.n(1, 8, 2, 2)} />
	<Five origin={grid.n(10, 8, 0, 2)} />
</SVG>
