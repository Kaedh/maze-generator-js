class Cell {
  constructor(index) {
    this.top = true;
    this.right = true;
    this.bottom = true;
    this.left = true;

    this.visited = false;
    this.current = false;

    this.index = index;
  }

  markAsVisited() {
    this.visited = true;
  }
  

  htmlTemplate() {
    return `<td class="${ this.current ?  'current' : '' } ${ this.visited ?  'visited' : '' } ${ this.top ? '' : 'top'} ${ this.right ? '' : 'right'} ${ this.bottom ? '' : 'bottom'} ${ this.left ? '' : 'left'}"></td>`
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

function update(grid) {
    let table =  `<table>`;
    for (let row = 0; row < grid[1].length ; row++) {
        table += `<tr>`
        for (let col = 0; col < grid[0].length ; col++) {
          table += grid[row][col].htmlTemplate();
        }
        table += `</tr>`
      }

    table += `</table>`

    return table;
}

function removeTopWall(current, next) {
  current.top = false;
  next.bottom = false;
}

function removeRightWall(current, next) {
  current.right = false;
  next.left = false;
}

function removeBottomWall(current, next) {
  current.bottom = false;
  next.top = false;
}

function removeLeftWall(current, next) {
  current.left = false;
  next.right = false;
}


function render(grid) {
  document.getElementById('root').innerHTML = update(grid);
}

function run() {
  
  if (stack.length > 0) {
    let current = stack.pop(); 

    current.current = true;


    let allneighbours = getAllAvailableNeighbours(current, maze);
    
    if ( allneighbours.length > 0) {
      current.current = false;
      stack.push(current);
            
      let choosen = allneighbours[Math.floor(Math.random() * allneighbours.length)];

      if (choosen.index[0] < current.index[0]) removeTopWall(current, choosen) 
      if (choosen.index[1] > current.index[1]) removeRightWall(current, choosen)
      if (choosen.index[0] > current.index[0]) removeBottomWall(current, choosen) 
      if (choosen.index[1] < current.index[1]) removeLeftWall(current, choosen)  

      choosen.markAsVisited();
      
      stack.push(choosen)
      
    }

    
    render(maze)
    
  }
  
}


const gridDimensions = {
  width: 35,
  height: 35,
};

let stack = [];
const maze = createDataStructure(gridDimensions);

const initialCell = maze[0][0];
  
initialCell.markAsVisited();

stack.push(initialCell);

setInterval( () => run(), 50) ;

