<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Media Control Rewind
	//[doc:alt] Rewind icon as defined by ISO 7000 / IEC 60417.
	//[doc:keywords] media control, iso, video, audio, rewind, fast forward
</script>

<SVG stroke-width="0" fill="currentColor" {...$$props} {grid}>
	<Polygon
		points={[
			grid.n(1, 8), //
			grid.n(8, 2), //
			grid.n(8, 14), //
		]} />
	<Polygon
		points={[
			grid.n(8, 8), //
			grid.n(15, 2), //
			grid.n(15, 14), //
		]} />
</SVG>
