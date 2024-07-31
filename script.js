// const sqCont = document.querySelector('#grid-container');
// const squareDiv = document.createElement('div');
// squareDiv.classList.add('square');

// sqCont.appendChild(squareDiv);

//FUNCTION TO ASK THE GRID SIZE
function askSize() {
    const size = prompt('choose the grid rows and columns number (max 100)');
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

}