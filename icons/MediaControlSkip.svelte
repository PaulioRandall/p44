<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Media Control Skip
	//[doc:alt] Skip icon as defined by ISO 7000 / IEC 60417.
	//[doc:keywords] media control, iso, video, audio, skip
</script>

<SVG stroke-width="0" fill="currentColor" {...$$props} {grid}>
	<Polygon
		points={[
			grid.n(1, 2), //
			grid.n(3, 2), //
			grid.n(3, 14), //
			grid.n(1, 14), //
		]} />
	<Polygon
		points={[
			grid.n(3, 8), //
			grid.n(9, 2), //
			grid.n(9, 14), //
		]} />
	<Polygon
		points={[
			grid.n(9, 8), //
			grid.n(15, 2), //
			grid.n(15, 14), //
		]} />
</SVG>
