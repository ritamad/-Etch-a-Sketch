
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

let cell = null;
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
        cell = document.createElement('div');
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

//MOUSEOVER EVENT ON EVERY CELL
gridContainer.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('grid-cell')) {
        let random1 = Math.random() * 100;
        let random2 = Math.random() * 100;
        let random3 = Math.random() * 100;
        event.target.style.backgroundColor = `rgb(${random1}%, ${random2}%, ${random3}%)`;
    }
});



