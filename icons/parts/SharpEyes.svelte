<script>
	import { Transform } from 'p45'
	import { grid } from '../shared'
	import SharpEye from './SharpEye.svelte'

	export let origin = grid.n(2, 5)
</script>

<SharpEye {origin} />
<slot />
<Transform flipX>
	<SharpEye {origin} />
	<slot />
</Transform>
