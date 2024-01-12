<script>
	import { Polygon } from 'p45'
	import { grid } from '../shared'
</script>

<Polygon
	{...$$restProps}
	fill="#050A23"
	stroke-width="0"
	points={[
		grid.n(0, 0), //
		grid.n(16, 0), //
		grid.n(16, 16), //
		grid.n(0, 16), //
	]} />
