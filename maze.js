const gridDimensions = {
  width: 10,
  height: 10,
};

class Cell {
  constructor(index) {
    this.top = true;
    this.right = true;
    this.bottom = true;
    this.left = true;

    this.visited = false;

    this.index = index;
  }

  markAsVisited() {
    this.visited = true;
  }
}

function createDataStructure(gridDimensions) {
  let gridMatrix = [];

  for (let row = 0; row < gridDimensions.height; row++) {
    let newRow = [];

    for (let col = 0; col < gridDimensions.width; col++) {
      newRow.push(new Cell([row, col]));
    }

    gridMatrix.push(newRow);
  }

  return gridMatrix;
}

function main() {
  let stack = [];
  const maze = createDataStructure(gridDimensions);

  const initialCell = maze[0][0];

  initialCell.markAsVisited();

  stack.push(initialCell);
}

main();
