<script context="module">
	export const keywords = ['geometry', 'circle', 'dot', 'round']
</script>

<script>
	import { Circle } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Circle radius="7" ref="P44:Circle" />
</SVG>
