<script>
	import { Path, M, A, L } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Media Control Replay
	//[doc:alt] Replay icon.
	//[doc:keywords] media control, video, audio, replay

	const xOffset = 2
</script>

<SVG stroke-width="6" {...$$props} {grid}>
	<Path
		d={[
			M(grid.n(3, 12, xOffset)),
			A(
				{ x: 24, y: 24 },
				grid.n(3, 4, xOffset), //
				{
					large: true,
				}
			),
			L(grid.n(2, 3, xOffset)),
			L(grid.n(2, 5, xOffset)),
			L(grid.n(4, 5, xOffset)),
			L(grid.n(3, 4, xOffset)),
		]} />
</SVG>
