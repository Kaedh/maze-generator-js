const gridDimensions = {
  width: 3,
  height: 3,
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

function topIsAvailable(cellIndex, grid) {
  try {
    let topNeighbour = grid[cellIndex[0] - 1][cellIndex[1]];

    if (topNeighbour.visited === true) {
      return false;
    }

    return topNeighbour;
  } catch (error) {
    return false;
  }
}

function rightIsAvailable(cellIndex, grid) {
  try {
    let rightNeighbour = grid[cellIndex[0]][cellIndex[1] + 1];

    if (rightNeighbour.visited === true) {
      return false;
    }

    return rightNeighbour;
  } catch (error) {
    return false;
  }
}

function bottomIsAvailable(cellIndex, grid) {
  try {
    let bottomNeighbour = grid[cellIndex[0] + 1][cellIndex[1]];

    if (bottomNeighbour.visited === true) {
      return false;
    }

    return bottomNeighbour;
  } catch (error) {
    return false;
  }
}

function leftIsAvailable(cellIndex, grid) {
  try {
    let leftNeighbour = grid[cellIndex[0]][cellIndex[1] - 1];

    if (leftNeighbour.visited === true) {
      return false;
    }

    return leftNeighbour;
  } catch (error) {
    return false;
  }
}

function getAllAvailableNeighbours(cell, grid) {
  let availableneighbours = [];

  if (topIsAvailable(cell.index, grid)) {
    availableneighbours.push(topIsAvailable(cell.index, grid));
  }

  if (rightIsAvailable(cell.index, grid)) {
    availableneighbours.push(rightIsAvailable(cell.index, grid));
  }

  if (bottomIsAvailable(cell.index, grid)) {
    availableneighbours.push(bottomIsAvailable(cell.index, grid));
  }

  if (leftIsAvailable(cell.index, grid)) {
    availableneighbours.push(leftIsAvailable(cell.index, grid));
  }

  return availableneighbours;
}

function main() {
  let stack = [];
  const maze = createDataStructure(gridDimensions);

  const initialCell = maze[1][1];

  initialCell.markAsVisited();

  stack.push(initialCell);
}

main();
