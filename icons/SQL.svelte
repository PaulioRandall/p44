<script>
	import { Text, Polygon } from 'p45'
	import { grid, SVG } from './shared'
	import { BG, Brick } from './parts'

	//[doc:name] SQL
	//[doc:alt] Custom SQL logo.
	//[doc:keywords] sql, database, db, query, data
</script>

<SVG {...$$props} {grid}>
	<BG />

	<g
		font-family="Verdana"
		font-size="18"
		stroke-width="1"
		stroke="burlywood"
		fill="burlywood">
		<Text origin={grid.n(3, 5)}>SQL</Text>
	</g>

	<Polygon
		stroke-width="0"
		fill="Lavender "
		points={[
			grid.n(5, 8, 2), //
			grid.n(10, 8, 2), //
			grid.n(10, 14, 2, 2), //
			grid.n(5, 14, 2, 2), //
		]} />

	<g stroke-width="0.5" stroke="dimgrey" fill="teal">
		<Brick origin={grid.n(5, 7, 0, 2)} />
		<Brick origin={grid.n(5, 9, 0, 2)} />
		<Brick origin={grid.n(5, 11, 0, 2)} />
		<Brick origin={grid.n(5, 13, 0, 2)} />
	</g>
</SVG>
