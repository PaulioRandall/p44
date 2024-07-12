<script>
	import { Shape } from 'p45'

	export let nodes = ''
	export let close = false

	const draw =
		'move to ' +
		nodes //
			.split(',')
			.map((n) => n.trim())
			.join('\nline to ') +
		(close ? '\nclose' : '')
</script>

<Shape {draw} {...$$restProps} />
