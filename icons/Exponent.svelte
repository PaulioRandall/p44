<script>
	import { Text } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Exponent
	//[doc:keywords] maths, power, exponentiation

	//[doc:prop] power is the exponent, defaults to 2
	export let power = 2

	//[doc:prop] base value the exponent is applied too, defaults to 'n'
	export let base = 'n'
</script>

<SVG
	font-family="Verdana"
	stroke-width="1"
	fill="currentColor"
	{...$$restProps}
	{grid}>
	<Text font-size="56" origin={grid.n(2, 14, grid.HALF)}>{base}</Text>
	<Text font-size="24" origin={grid.n(10, 7, grid.HALF)}>{power}</Text>
</SVG>
