<script context="module">
	export const keywords = ['maths', 'power', 'square']
</script>

<script>
	import { Text } from 'p45'
	import { grid, SVG } from './shared'

	export let n = 2
</script>

<SVG {...$$restProps} {grid}>
	<style>
		.text {
			stroke-width: 1;
			fill: currentColor;
		}

		.number {
			font-size: 56px;
		}

		.power {
			font-size: 24px;
		}
	</style>
	<Text class="text number" origin={grid.n(2, 14, grid.HALF)}>n</Text>
	<Text class="text power" origin={grid.n(10, 7, grid.HALF)}>{n}</Text>
</SVG>
