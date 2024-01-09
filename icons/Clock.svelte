<script>
	import { Line, Circle } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Clock
	//[doc:alt] A clock set to approximately ten past ten.
	//[doc:keywords] clock, time
</script>

<SVG stroke-linecap="round" {...$$props} {grid}>
	<Circle radius="7" />
	<Line from={grid.center} to={grid.n(5, 5)} />
	<Line from={grid.center} to={grid.n(12, 4)} />
</SVG>
