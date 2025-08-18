export function main(coord, context, cursor, buffer) {
	const density = '.SPAM...'
	const t = context.time * 0.001
	const m = Math.min(context.cols, context.rows)
	const a = context.metrics.aspect

	const st = {
		x: 2.0 * (coord.x - context.cols / 2) / m * a,
		y: 2.0 * (coord.y - context.rows / 2) / m
	}

	const radius = Math.sqrt(st.x * st.x + st.y * st.y)
	const angle = Math.atan2(st.y, st.x)

	const spirals = 5
	const spiralOffset = angle * spirals + radius * 8 - t * 2

	const spiralValue = Math.sin(spiralOffset) * 0.2 + 0.5

	const falloff = Math.exp(-radius * 1.9)
	const c = spiralValue * falloff

	const index = Math.floor(c * density.length)

	return {
		char: coord.x % 2 ? '' : density[index],
		backgroundColor: 'white',
		color: 'black'
	}
}
