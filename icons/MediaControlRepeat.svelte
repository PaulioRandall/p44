<script>
	import { Transform, Polygon, Path, M, L, C } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Media Control Repeat
	//[doc:alt] Repeat icon as defined by ISO 7000 / IEC 60417.
	//[doc:keywords] media control, iso, video, audio, repeat
</script>

<SVG stroke-width="6" {...$$props} {grid}>
	<defs>
		<Path
			id="p44-media-control-repeat-arrow"
			d={[
				M(grid.n(5, 12)),
				L(grid.n(3, 12)),
				C(
					grid.n(1, 12), //
					grid.n(1, 11), //
					grid.n(1, 10) //
				),
				L(grid.n(1, 6)),
				C(
					grid.n(1, 5), //
					grid.n(1, 4), //
					grid.n(3, 4) //
				),
				L(grid.n(6, 4)),
				L(grid.n(6, 2, 0, grid.HALF)), //
				L(grid.n(8, 4)), //
				L(grid.n(6, 5, 0, grid.HALF)), //
				L(grid.n(6, 4)), //
			]} />
	</defs>
	<use href="#p44-media-control-repeat-arrow" />
	<Transform flipXY>
		<use href="#p44-media-control-repeat-arrow" />
	</Transform>
</SVG>
