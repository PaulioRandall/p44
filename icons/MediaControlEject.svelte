<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Media Control Eject
	//[doc:alt] Eject icon as defined by ISO 7000 / IEC 60417.
	//[doc:keywords] media control, iso, video, audio, eject
</script>

<SVG stroke-width="0" fill="currentColor" {...$$props} {grid}>
	<Polygon
		points={[
			grid.n(8, 1), //
			grid.n(1, 9), //
			grid.n(15, 9), //
		]} />
	<Polygon
		points={[
			grid.n(1, 11), //
			grid.n(15, 11), //
			grid.n(15, 15), //
			grid.n(1, 15), //
		]} />
</SVG>
