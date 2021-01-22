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

    return true;
  } catch (error) {
    return false;
  }
}

function rightIsAvailable(cellIndex, grid) {
    try {
      let rightNeighbour = grid[ cellIndex[0] ]  [cellIndex[1] + 1 ];
  
      if (rightNeighbour.visited === true) {
        return false;
      }
  
      return true;
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
  
      return true;
    } catch (error) {
      return false;
    }
  }
  

function main() {
  let stack = [];
  const maze = createDataStructure(gridDimensions);

  const initialCell = maze[0][1];

  initialCell.markAsVisited();

  stack.push(initialCell);
}

main();
