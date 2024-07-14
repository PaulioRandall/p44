<script>
	import { Shape, Transform } from 'p45'
</script>

<Transform {...$$restProps}>
	<Shape
		draw="
move to V10
arc to D10 with radius 10 and 13
	" />

	<Shape
		draw="
	move to D6
line to D10
line to H10
	"
		origin="D10"
		transforms="rotate by -20" />
</Transform>
