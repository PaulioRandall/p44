<script>
	import { Line } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Diverging Lines
	//[doc:alt] Two diverging or converging lines; dependent on your perspective.
	//[doc:keywords] lines, converging, diverging
</script>

<SVG {...$$props} {grid}>
	<Line from={grid.n(3, 15)} to={grid.n(7, 1)} />
	<Line from={grid.n(13, 15)} to={grid.n(9, 1)} />
</SVG>
