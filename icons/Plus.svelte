<script>
	import { Line } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Plus
	//[doc:keywords] math, cross, plus, addition
</script>

<SVG {...$$props} {grid}>
	<Line from={grid.n(8, 1)} to={grid.n(8, 15)} />
	<Line from={grid.n(1, 8)} to={grid.n(15, 8)} />
</SVG>
