const density = "SPAM     ";

export function main(coord, context, cursor, buffer) {
  const { cols, rows, frame } = context;
  const { x, y } = coord;

  console.log(context)
  
  const centerX = cols / 2;
  const centerY = rows / 2;

  const posX = x;
  const posY = y * 2;

  const dx = posX - centerX;
  const dy = posY - centerY;

  const d = Math.sqrt(dx * dx + dy * dy);

  const index =
    Math.floor(posX + Math.sin(posY / 4.0 + context.frame / 50.0) * 4.0) %
    density.length;

  // const index = Math.floor(posX) % density.length;

  return density[index];
}
