<script context="module">
	export const keywords = ['maths', 'power', 'square']
</script>

<script>
	import { Text, Path, M, L } from 'p45'
	import { grid, SVG } from './shared'

	export let n = ''
</script>

<SVG {...$$restProps} {grid}>
	<Path
		d={[
			M(grid.n(1, 8)), //
			L(grid.n(4, 13)), //
			L(grid.n(8, 3)), //
			L(grid.n(15, 3)), //
		]} />
	<style>
		.p44-math-sqrt {
			stroke-width: 1;
			fill: currentColor;
			font-size: 24px;
		}
	</style>
	<Text class="p44-math-sqrt" origin={grid.n(1, 6, grid.HALF)}>{n}</Text>
</SVG>
