<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Media Control Skip
	//[doc:keywords] media control, iso, video, audio, skip
</script>

<SVG {...$$props} {grid}>
	<Polygon
		points={[grid.n(1, 2), grid.n(3, 2), grid.n(3, 14), grid.n(1, 14)]} />
	<Polygon
		points={[
			grid.n(4, 8), //
			grid.n(9, 2), //
			grid.n(9, 14), //
		]} />
	<Polygon
		points={[
			grid.n(10, 8), //
			grid.n(15, 2), //
			grid.n(15, 14), //
		]} />
</SVG>
