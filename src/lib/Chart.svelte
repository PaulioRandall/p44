<script>
	import { Shape, Circle } from 'p45'
	import SVG from './private/SVG.svelte'
	import Line from './private/Line.svelte'

	//@component
	// Data chart or graph.
</script>

<SVG title="Chart" {...$$restProps}>
	<Shape
		draw="
		move to B23
		line to B17
		line to F17
		line to F23
		close
	" />
	<Shape
		draw="
move to H23
line to H11
line to L11
line to L23
close
	" />
	<Shape
		draw="
move to N23
line to N14
line to R14
line to R23
close
	" />
	<Shape
		draw="
move to T23
line to T8
line to X8
line to X23
close
	" />
	<Line nodes="D10,J4,P7,V2" />
	<Circle origin="D10" radius="1" />
	<Circle origin="J4" radius="1" />
	<Circle origin="P7" radius="1" />
	<Circle origin="V2" radius="1" />
</SVG>
