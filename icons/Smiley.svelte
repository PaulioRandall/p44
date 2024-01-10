<script>
	import { Circle, Path, M, C } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Smiley
	//[doc:keywords] smiley, face, smile, frown

	const types = {
		bigsmile: {
			from: grid.n(3, 10),
			cp1: grid.n(5, 15),
			cp2: grid.n(11, 15),
			to: grid.n(13, 10),
		},
		smile: {
			from: grid.n(3, 11),
			cp1: grid.n(6, 14),
			cp2: grid.n(10, 14),
			to: grid.n(13, 11),
		},
		neutral: {
			from: grid.n(3, 12),
			cp1: grid.n(3, 12),
			cp2: grid.n(13, 12),
			to: grid.n(13, 12),
		},
		frown: {
			from: grid.n(3, 13),
			cp1: grid.n(6, 10),
			cp2: grid.n(10, 10),
			to: grid.n(13, 13),
		},
		bigfrown: {
			from: grid.n(3, 14),
			cp1: grid.n(5, 9),
			cp2: grid.n(11, 9),
			to: grid.n(13, 14),
		},
	}

	//[doc:prop] type = One of [bigsmile, smile, neutral,  frown, bigfrown]
	export let type = 'smile'
	$: t = types[type.toLowerCase()]
</script>

<SVG {...$$restProps} {grid}>
	<Circle origin={grid.n(4, 5)} radius={grid.HALF} ref="P44:Smiley" />
	<Circle origin={grid.n(12, 5)} radius={grid.HALF} ref="P44:Smiley" />
	<Path
		d={[
			M(t.from), //
			C(t.cp1, t.cp2, t.to), //
		]} />
</SVG>
