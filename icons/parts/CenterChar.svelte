<script>
	import { Text } from 'p45'
	import { grid } from '../shared'

	export let char = '?'
</script>

<Text
	origin={grid.n(6, 10, -2, 3)}
	font-size="32"
	stroke-width="0"
	fill="currentColor"
	{...$$restProps}>
	{char}
</Text>
