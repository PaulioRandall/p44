<script>
	import { Transform } from 'p45'
	import { grid } from '../shared'
	import CrimsonEye from './CrimsonEye.svelte'

	export let origin = { x: 0, y: 0 }
</script>

<CrimsonEye {...$$restProps} {origin} />
<Transform flipX>
	<CrimsonEye {...$$restProps} {origin} />
</Transform>
