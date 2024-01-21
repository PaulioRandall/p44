<script>
	import { Rect } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Copy
	//[doc:alt] Indicates clipboard copyable content.
	//[doc:keywords] copy, clipboard, files
</script>

<SVG {...$$props} {grid}>
	<Rect topLeft={grid.n(6, 1)} botRight={grid.n(14, 12)} rx="3" ry="3" />
	<Rect topLeft={grid.n(2, 4)} botRight={grid.n(10, 15)} rx="3" ry="3" />
</SVG>
