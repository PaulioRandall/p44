<script>
	import { Text } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Exponent
	//[doc:keywords] math, power, exponentiation

	//[doc:prop] power = Exponent or power, defaults to 2
	export let power = 2

	//[doc:prop] base = Base value, defaults to 'n'
	export let base = 'n'
</script>

<SVG {...$$restProps} {grid}>
	<Text class="p44-expo base" origin={grid.n(2, 14, grid.HALF)}>{base}</Text>
	<Text class="p44-expo power" origin={grid.n(10, 7, grid.HALF)}>{power}</Text>
</SVG>

<style>
	:global(.p44-expo) {
		stroke-width: 1;
		fill: currentColor;
	}

	:global(.p44-expo.base) {
		font-size: 56px;
	}

	:global(.p44-expo.power) {
		font-size: 24px;
	}
</style>
