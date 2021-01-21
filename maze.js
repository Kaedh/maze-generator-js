const gridDimensions = {
    width: 10,
    height: 10
};

class Cell {
    constructor() {
        this.top = true,
        this.right = true,
        this.bottom = true,
        this.left = true
    };
};

function createDataStructure(gridDimensions) {
    let gridMatrix= [];

    for (let row = 0; row < gridDimensions.height; row++) {
        let newRow = [];
        
        for (let col = 0; col < gridDimensions.width; col++) {
            newRow.push( new Cell() )
        
        }

        gridMatrix.push(newRow);
    };

    return gridMatrix;
};
