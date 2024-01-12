// Transform provides utility functions for generating individual
// transformation strings, e.g. "translate(2, 4) scale(0.5, 2)"
export default {
	join(transformations = []) {
		return transformations.join(' ')
	},

	translate(x, y) {},

	translateX(x) {},

	translateY(y) {},

	moveBy(x, y) {},

	moveByX(x) {},

	moveByY(y) {},

	scale(x, y) {},

	scaleX(x) {},

	scaleY(y) {},

	growBy(x, y) {},

	growByX(x) {},

	growByY(y) {},

	shrinkBy(x, y) {},

	shrinkByX(x) {},

	shrinkByY(y) {},

	skew(x, y) {},

	skewX(x) {},

	skewY(y) {},

	rotate(deg) {},

	rotateCW(deg) {},

	rotateCCW(deg) {},

	degToRad(deg) {},

	radToDeg(rad) {},
}
