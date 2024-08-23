
//FUNCTION TO ASK THE GRID SIZE
function askSize() {
    const size = prompt('choose the grid rows and columns number (100 max)');
    return size;
};

// EVENT HANDLER TO GET THE GRID SIZE AND CREATE IT
const sizeBtn = document.querySelector('#size');
sizeBtn.focus();
sizeBtn.addEventListener('click', () => {
    const size = askSize();
    if (size !== null) {
        createGrid(size);
    }
});


//FUNCTION TO CREAT THE GRID
function createGrid(size) {
    const gridSize = parseInt(size, 10); //base dieci
    if(isNaN(gridSize) || gridSize < 2 || gridSize > 100) {
        alert('Please enter a valid number between 2 and 100');
        return;
    }

    const container = document.querySelector('#grid-container');
    container.textContent = '';

    const cellSize = 600 / gridSize;
    for (let i = 0; i < gridSize * gridSize; i ++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        container.appendChild(cell);
    }
};

// RESET BUTTON
const resetBtn = document.querySelector('#reset');
const gridContainer = document.querySelector('#grid-container');
resetBtn.addEventListener('click', () => {
    gridContainer.textContent = '';
    
});

