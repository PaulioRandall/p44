<script>
	import { Line } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Minus
	//[doc:keywords] math, minus, subtraction, pipe
</script>

<SVG {...$$props} {grid}>
	<Line from={grid.n(1, 8)} to={grid.n(15, 8)} />
</SVG>
