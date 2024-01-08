<script>
	import { Path, M, L } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Conical Flask
	//[doc:alt] Conical flask like those used in chemistry.
	//[doc:keywords] conical flask, erlenmeyer flask, science, chemistry
</script>

<SVG {...$$restProps} {grid}>
	<Path
		d={[
			M(grid.n(6, 1, grid.HALF)), //
			L(grid.n(6, 5, grid.HALF)), //
			L(grid.n(3, 15)), //
			L(grid.n(13, 15)), //
			L(grid.n(9, 5, grid.HALF)), //
			L(grid.n(9, 1, grid.HALF)), //
		]} />
</SVG>
