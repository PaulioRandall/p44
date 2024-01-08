<script context="module">
	export const keywords = ['geometry', 'circle', 'dot', 'round']
</script>

<script>
	import { Circle } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Circle
	//[doc:keywords] geometry, circle, dot, round
</script>

<SVG {...$$restProps} {grid}>
	<Circle radius="7" />
</SVG>
