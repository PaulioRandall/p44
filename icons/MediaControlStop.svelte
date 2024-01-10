<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Media Control Stop
	//[doc:name] Media control stop icon as defined by ISO 7000 / IEC 60417.
	//[doc:keywords] media control, iso, video, audio, stop
</script>

<SVG stroke-width="0" fill="currentColor" {...$$props} {grid}>
	<Polygon
		points={[
			grid.n(1, 1), //
			grid.n(15, 1), //
			grid.n(15, 15), //
			grid.n(1, 15), //
		]} />
</SVG>
