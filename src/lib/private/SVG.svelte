<script context="module">
	import { Icon, P45 } from 'p45'

	const p45 = new P45(24)
</script>

<Icon {p45} stroke="currentColor" {...$$restProps}>
	<slot />
</Icon>
