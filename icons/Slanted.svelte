<script context="module">
	export const keywords = ['geometry', 'lines', 'slanted', 'diagonal']
</script>

<script>
	import { Line } from 'p45'
	import { grid, SVG } from './shared'
</script>

<SVG {...$$restProps} {grid}>
	<Line from={grid.n(1, 10)} to={grid.n(15, 6)} />
</SVG>
