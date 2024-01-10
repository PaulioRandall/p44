<script>
	import { getContext } from 'svelte'
	import { Polygon } from 'p45'

	const grid = getContext('grid')

	export let shine = ''
</script>

<g stroke-width="0" {...$$restProps}>
	<Polygon
		points={[
			grid.n(0, 0), //
			grid.n(16, 0), //
			grid.n(14, 14), //
			grid.n(8, 16), //
			grid.n(2, 14), //
		]} />

	{#if shine}
		<Polygon
			fill={shine}
			points={[
				grid.n(8, 2), //
				grid.n(14, 2), //
				grid.n(12, 12, grid.HALF, grid.HALF), //
				grid.n(8, 14), //
			]} />
	{/if}
</g>
