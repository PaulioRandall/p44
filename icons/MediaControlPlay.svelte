<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Media Control Play
	//[doc:keywords] media control, iso, video, audio, play
</script>

<SVG stroke-width="0" fill="currentColor" {...$$props} {grid}>
	<Polygon
		points={[
			grid.n(1, 1), //
			grid.n(15, 8), //
			grid.n(1, 15), //
		]} />
</SVG>
