<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Media Control Stop
	//[doc:keywords] media control, iso, video, audio, stop
</script>

<SVG {...$$props} {grid}>
	<Polygon
		points={[
			grid.n(1, 1), //
			grid.n(15, 1), //
			grid.n(15, 15), //
			grid.n(1, 15), //
		]} />
</SVG>
