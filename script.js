const gridContainer = document.querySelector('#divContainer');



function makeCells() {
    for (let i = 0; i < 16;i++ ) {
        const gridRow = document.createElement("div");
        gridRow.classList.add('row');
        gridContainer.appendChild(gridRow);
        for (let i = 0; i < 16; i++) {
            const gridColumn = document.createElement("div");
            gridColumn.classList.add('column');
            gridRow.appendChild(gridColumn);
                gridColumn.addEventListener('mouseover', 
                e => e.target.classList.add('cola')) 
                const clear = document.querySelector('.clear');
                clear.addEventListener('click', clearPage)
                
                function clearPage() {
                gridColumn.classList.remove('cola')
                }   
        }   
    }
}

makeCells();



