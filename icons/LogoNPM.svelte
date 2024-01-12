<script>
	import { Polygon } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Node Package Manager (NPM) Logo
	//[doc:keywords] logo, npm, node, javascript, programming
</script>

<SVG stroke-width="0" {grid} {...$$props}>
	<Polygon
		fill="#cd3632"
		points={[grid.n(0, 0), grid.n(16, 0), grid.n(16, 16), grid.n(0, 16)]} />
	<Polygon
		fill="white"
		points={[
			grid.n(2, 14),
			grid.n(2, 2),
			grid.n(14, 2),
			grid.n(14, 14),
			grid.n(11, 14),
			grid.n(11, 5),
			grid.n(8, 5),
			grid.n(8, 14),
		]} />
</SVG>
