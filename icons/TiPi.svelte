<script>
	import { Path, M, L } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] TiPi
	//[doc:keywords] tipi, teepee, triangle
</script>

<SVG {...$$props} {grid}>
	<Path
		d={[
			M(grid.n(9, 1)), //
			L(grid.n(1, 15)), //
			L(grid.n(15, 15)), //
			L(grid.n(6, 1)), //
		]} />
</SVG>
