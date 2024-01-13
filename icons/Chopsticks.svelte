<script>
	import { Line } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Chopsticks
	//[doc:alt] Two lines crossing to form an image of chopsticks.
	//[doc:keywords] chopsticks, crossing lines
</script>

<SVG {...$$props} {grid}>
	<Line from={grid.n(5, 1)} to={grid.n(9, 15)} />
	<Line from={grid.n(11, 1)} to={grid.n(6, 15)} />
</SVG>
