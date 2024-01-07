<script context="module">
	export const keywords = ['geometry', 'lines', 'slanted', 'diagonal']
</script>

<script>
	import { Line } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Line from={grid.n(1, 15)} to={grid.n(15, 1)} />
</SVG>
