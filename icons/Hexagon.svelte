<script context="module">
	export const keywords = ['geometry', 'polygon', 'hexagon']
</script>

<script>
	import { RegularPolygon, P45Util, P45RegPoly } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<RegularPolygon sides={6} />
</SVG>
