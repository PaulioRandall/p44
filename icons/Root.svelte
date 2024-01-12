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
	<Text class="p44-sqrt base" origin={grid.n(8, 13, grid.HALF)}>{base}</Text>
	<Text class="p44-sqrt power" origin={grid.n(1, 6, grid.HALF)}>{power}</Text>
</SVG>

<style>
	:global(.p44-sqrt) {
		stroke-width: 1;
		fill: currentColor;
	}

	:global(.p44-sqrt.base) {
		font-size: 48px;
	}

	:global(.p44-sqrt.power) {
		font-size: 24px;
	}
</style>
