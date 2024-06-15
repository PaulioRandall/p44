<script context="module">
	import { Icon, Grid } from 'p45'

	const grid = new Grid(24)
</script>

<Icon {grid} stroke="currentColor" {...$$restProps}>
	<slot />
</Icon>
