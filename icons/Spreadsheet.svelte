<script>
	import { Path, M, L, C, Q, Circle, Text } from 'p45'
	import { grid, SVG } from './shared'

	//[doc:name] Spreadsheet
	//[doc:alt] Represents a spreadsheet or table based statistics.
	//[doc:keywords] spreadsheet, excel, table, grid
	const pieOrigin = grid.n(10, 10, 2, 2)
</script>

<SVG {...$$props} {grid}>
	<Path
		stroke-linecap="square"
		stroke-width="1"
		stroke="forestgreen"
		d={[
			// Vertical
			M(grid.n(1, 1)), //
			L(grid.n(1, 15)), //
			M(grid.n(5, 1, 3)), //
			L(grid.n(5, 15, 3)), //
			M(grid.n(11, 1, -2)), //
			L(grid.n(11, 15, -2)), //
			M(grid.n(15, 1)), //
			L(grid.n(15, 15)), //
			// Horizontal
			M(grid.n(1, 1)), //
			L(grid.n(15, 1)), //
			M(grid.n(1, 5, 0, 3)), //
			L(grid.n(15, 5, 0, 3)), //
			M(grid.n(1, 11, 0, -2)), //
			L(grid.n(15, 11, 0, -2)), //
			M(grid.n(1, 15)), //
			L(grid.n(15, 15)), //
		]} />
	<Circle
		origin={pieOrigin}
		radius="3.05"
		stroke-width="0.5"
		stroke="dimgrey"
		fill="dodgerblue" />
	<Circle
		origin={pieOrigin}
		radius="1.5"
		fill="transparent"
		stroke-width="12"
		stroke="indianred"
		stroke-dasharray="7 30"
		transform="rotate(-75, {pieOrigin.x}, {pieOrigin.y})" />
	<Circle
		origin={pieOrigin}
		radius="1.5"
		fill="transparent"
		stroke-width="12"
		stroke="yellow"
		stroke-dasharray="10 30"
		transform="rotate(-10, {pieOrigin.x}, {pieOrigin.y})" />
	<g
		stroke-width="0"
		stroke="grey"
		fill="grey"
		font-size="10"
		font-family="Verdana"
		font-weight="bold">
		<Text origin={grid.n(1, 4, 2, 1)}>A1</Text>
		<Text origin={grid.n(6, 4, 1, 1)}>B1</Text>
		<Text origin={grid.n(11, 4, 0, 1)}>C1</Text>
		<Text origin={grid.n(1, 9, 2)}>A2</Text>
		<Text origin={grid.n(1, 13, 2, 3)}>A3</Text>
	</g>
</SVG>
