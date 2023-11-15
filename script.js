const gridContainer = document.querySelector('#divContainer');



function makeCells(userInput) {
    for (let i = 0; i < userInput;i++ ) {
        const gridRow = document.createElement("div");
        gridRow.classList.add('row');
        gridContainer.appendChild(gridRow); //creates 16 rows
        for (let i = 0; i < userInput; i++) {
            const gridColumn = document.createElement("div");
            gridColumn.classList.add('column');
            gridRow.appendChild(gridColumn); // creates columns for each row
            
                const randColor = () => {
                    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);
                    gridColumn.style.background = `#${hexVal}`;
                } // generates random hex color val
                
                gridColumn.addEventListener('mouseover', randColor); 
                // on hover, change bg to random color

                const clear = document.querySelector('.clear');
                clear.addEventListener('click', clearPage);      
                function clearPage() {
                    gridRow.innerHTML = '';
                    gridColumn.style.background = `white`;
                }   //code for clear button; whenever clicked, clears canvass.
        }   
    }
}


const start = document.querySelector('.start');
start.addEventListener('click', function() {
    
    gridContainer.innerHTML = ""
    const userInput = prompt('How many squares per side do you want?')
    if (userInput > 100) {
        alert('Please chose a number less than 100')
    } else if (userInput < 0) {
        alert('Invalid input. Please chose a number of squares greater than 0.')
    } else {
        makeCells(userInput);
    }
    
})




