const gridContainer = document.querySelector('#divContainer');


function makeCells() {
    for (let i = 0; i < 16;i++ ) {
        const gridRow = document.createElement("div");
        gridRow.classList.add('row');
        gridContainer.appendChild(gridRow);
        //gridRow.textContent = "testt"
        for (let i = 0; i < 16; i++) {
            const gridColumn = document.createElement("div");
            gridColumn.classList.add('column');
            gridRow.appendChild(gridColumn);
            gridColumn.textContent = ". ";
            }
    }
}


makeCells();
