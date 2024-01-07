<script context="module">
	export const keywords = ['geometry', 'circle', 'dot', 'round']
</script>

<script>
	import { Circle } from 'p45'
	import { grid, SVG } from './shared'

	export let radius = 7
</script>

<SVG {...$$restProps} {grid}>
	<Circle {radius} ref="P44:DynamicCircle" />
</SVG>
