<script>
	import { Transform, Polygon, Path, M, L, C, S } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Media Control Shuffle
	//[doc:keywords] media control, iso, video, audio, shuffle
</script>

<SVG stroke-width="6" {...$$props} {grid}>
	<defs>
		<Path
			id="p44-media-control-shuffle-arrow"
			d={[
				M(grid.n(1, 4)),
				L(grid.n(3, 4)),
				C(
					grid.n(7, 4), //
					grid.n(7, 9), //
					grid.n(7, 9) //
				),
				S(
					grid.n(8, 12), //
					grid.n(10, 12) //
				),
				L(grid.n(12, 12)), //
				L(grid.n(12, 10, 0, grid.HALF)), //
				L(grid.n(14, 12)), //
				L(grid.n(12, 14, 0, -grid.HALF)), //
				L(grid.n(12, 12)), //
			]} />
	</defs>
	<use href="#p44-media-control-shuffle-arrow" />
	<Transform flipY>
		<use href="#p44-media-control-shuffle-arrow" />
	</Transform>
</SVG>
