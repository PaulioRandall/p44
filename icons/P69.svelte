<script>
	import { Path, M, C, L, Transform } from 'p45'
	import { grid, SVG } from './shared'
	import { BG, Six, SharpEyes } from './parts'

	//[doc:name] P69
	//[doc:alt] Logo of the P69 CSS compile time token library.
	//[doc:keywords] logo, p69
</script>

<SVG {...$$props} {grid}>
	<BG />
	<SharpEyes origin={grid.n(1, 0, 2, 2)}>
		<Path
			stroke="crimson"
			stroke-width="2"
			stroke-linecap="round"
			d={[
				M(grid.n(1, 1, 3, 2)),
				C(
					grid.n(3, 4, 2, 2), //
					grid.n(4, 0, 2, 2), //
					grid.n(6, 6, 3, 2) //
				),
			]} />
	</SharpEyes>
	<Six origin={grid.n(1, 8, 2, 2)} />
	<Transform flipY flipX offset={{ y: -32 }}>
		<Six origin={grid.n(1, 8, 2, 2)} />
	</Transform>
</SVG>
