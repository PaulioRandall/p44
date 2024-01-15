<script>
	import { Text, Path, M, L } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Root
	//[doc:keywords] maths, root

	//[doc:prop] power is the exponent, defaults to 2
	export let power = 2

	//[doc:prop] base value the exponent is applied too, defaults to 'n'
	export let base = 'n'
</script>

<SVG {...$$restProps} {grid}>
	<Path
		d={[
			M(grid.n(1, 8)), //
			L(grid.n(4, 13)), //
			L(grid.n(8, 3)), //
			L(grid.n(15, 3)), //
		]} />
	<g font-family="Verdana" stroke-width="1" fill="currentColor">
		<Text font-size="42" origin={grid.n(8, 13, grid.HALF)}>{base}</Text>
		<Text font-size="24" origin={grid.n(1, 6, grid.HALF)}>{power}</Text>
	</g>
</SVG>
