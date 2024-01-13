<script>
	import { Transform } from 'p45'
	import { grid } from '../shared'
	import Horn from './Horn.svelte'
</script>

<g {...$$props}>
	<Horn origin={grid.n(0, 1)} />
	<Transform flipX>
		<Horn origin={grid.n(0, 1)} />
	</Transform>
</g>
