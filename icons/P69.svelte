<script>
	import { Path, M, C, L, Transform } from 'p45'
	import { grid, SVG } from './shared'
	import { BG, Six, CrimsonEyes } from './parts'

	//[doc:name] P69
	//[doc:alt] Logo of the P69 CSS compile time token library.
	//[doc:keywords] logo, p69
</script>

<SVG {...$$props} {grid}>
	<filter id="p44-p69-glow" x="0" y="0">
		<feGaussianBlur in="SourceGraphic" stdDeviation="0.25"> </feGaussianBlur>
	</filter>
	<BG />
	<g filter="url(#p44-p69-glow)">
		<CrimsonEyes origin={grid.n(1, 5)} fill="white" />
		<Path
			stroke-width="0"
			fill="white"
			d={[
				M(grid.n(2, 7)),
				C(
					grid.n(1, 2), //
					grid.n(6, 1), //
					grid.n(7, 3) //
				),
				C(
					grid.n(5, 2, 0, -1), //
					grid.n(2, 3, 2, 2), //
					grid.n(3, 6) //
				),
			]} />
		<Path
			stroke-width="0"
			fill="white"
			d={[
				M(grid.n(14, 5, 0.5)),
				C(
					grid.n(14, 6, 3), //
					grid.n(14, 17, 3, 1), //
					grid.n(9, 13) //
				),
				C(
					grid.n(13, 14, -2, 3), //
					grid.n(14, 11, 0, 1), //
					grid.n(12, 6, 3) //
				),
			]} />
	</g>
</SVG>
