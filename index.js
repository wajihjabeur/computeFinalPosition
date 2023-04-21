// position[col,row]
function computeFinalPosition(
  width,
  height,
  position,
  portailA,
  portailB,
  moves
) {
  let tempPos = false;
  let newPosition = [...position];
  const movesArray = moves.split("");
  if (movesArray.length > 255 || movesArray.length < 0) {
    console.error("Lengh not in range");
    return newPosition;
  }
  for (let i = 0; i < movesArray.length; i++) {
    const element = movesArray[i];
    switch (element) {
      case "U":
        if (newPosition[1] > 0) newPosition[1] -= 1;
        break;
      case "D":
        if (newPosition[1] < height) newPosition[1] += 1;
        break;
      case "R":
        if (newPosition[0] < width) newPosition[0] += 1;
        break;
      case "L":
        if (newPosition[0] > 0) newPosition[0] -= 1;
        break;
      default:
        break;
    }

    if (JSON.stringify(newPosition) === JSON.stringify(portailA) && !tempPos) {
      newPosition = [...portailB];

      tempPos = true;
    } else if (
      JSON.stringify(newPosition) === JSON.stringify(portailB) &&
      !tempPos
    ) {
      newPosition = [...portailA];
      tempPos = true;
    } else {
      tempPos = false;
    }
  }
  return newPosition;
}
// Example 1
console.log(computeFinalPosition(5, 4, [0,0], [1, 1], [2, 3], "DRRLLD"));
