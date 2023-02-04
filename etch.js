
//body
const div = document.querySelector('body');
// Whole div Container
const divContainer = document.createElement('div');
divContainer.classList.add('divContainer');

//attached the div Container to body
div.appendChild(divContainer);
    document.querySelector('.divContainer').style.borderColor = 'black';
    document.querySelector('.divContainer').style.display = 'grid';
    document.querySelector('.divContainer').style.gridTemplateColumns = 'auto auto auto auto';
    document.querySelector('.divContainer').style.justifyContent = 'space-evenly';
    document.querySelector('.divContainer').style.alignContent = 'center';
    document.querySelector('.divContainer').style.margin = '50px';
    document.querySelector('.divContainer').style.border = '20px';
    
//start page with 16x16 squares
function begin() {
    for(s = 0; s <= 256; s++) {
        if(s === 256) {
            console.log("16x16");
        } else {
            gridMakingDiv();
        }   
      document.querySelector('.divContainer').style.gridTemplateColumns = "repeat(16, 1fr)";
    }
}

//start of page
begin();

//getting rid of the previous grid to make new grid
function hiddenStyle() {
    document.querySelectorAll('.gridMaking').forEach(el => {
        el.style.display = 'none';
    });
}

//have to make a loop that inputs the number and makes that amount of grids
//limit the number of squares to 100
//number has to equal # of squares for columns and  rows

//ok, lets start with making 16x16 grid
function gridMakingDiv() {
    grid = document.createElement('div');
    grid.classList.add('gridMaking');
    divContainer.appendChild(grid);
    
    styleBorder();
    
    
}

//changing the style of each box
function styleBorder() {
    document.querySelectorAll('.gridMaking').forEach(el => {
        el.style.borderStyle = 'solid';
        el.style.padding = '20px';
        el.style.color = generateRandomColor();
        el.style.margin = '10px';
        el.style.aspectRatio = "1/1";
        
        
    });
}

//random color .... sometimes doesn't generate a color...
function generateRandomColor() {
    let randomColor = '#'+(Math.floor(Math.random()*16777215));
    //console.log(randomColor);
    return randomColor
    
}

let totalBox = '';
//button press
//assigning BUTTON
let buttAll = document.querySelectorAll('button');
buttAll.forEach((button) => {
    button.addEventListener('click', () => {
        hiddenStyle();
        promptNumbers();
    });
});

function promptNumbers(numCol, numRow, totalBox) {
    numCol = prompt("How many COLUMNS?");
    console.log("number of Columns = " + numCol);
    numRow = prompt("How many ROWS?");
    console.log("number of Rows = " + numRow);
    if (numCol >= 100 || numRow >= 100) {
        alert("ERROR, please refresh.")
    } else {
        totalBox = numCol * numRow;
        gridPrompt(totalBox);
    }
    console.log(numCol);
    document.querySelector('.divContainer').style.gridTemplateColumns = "repeat("+numCol+", 1fr)";
}

//making the grid
function gridPrompt(totalBox) {
    for (i = 0; i <= totalBox; i ++) {
        if (i === totalBox) {
            console.log("total box = " + totalBox)
        } else {
            gridMakingDiv();
            
        }
    }
}





/*
//constrictor function
function MakingDiv(name, words, bColor) {
    this.name = name;
    this.words = words;
    this.bColor = bColor;
    
    
    name = document.createElement('div');
    name.classList.add(`${this.name}`);
    
    name.textContent = words;
    divContainer.appendChild(name);
    document.querySelector('.'+`${this.name}`).style.color = bColor;
    document.querySelector('.'+`${this.name}`).style.fontSize = '50px';
    document.querySelector('.'+`${this.name}`).style.borderStyle = 'solid';
    document.querySelector('.'+`${this.name}`).style.padding = '20px';


    
}



//numbering the boxes
let num = 1;

const makingDiv1 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv2 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv3 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv4 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv5 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv6 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv7 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv8 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv9 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv10 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv11 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv12 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv13 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv14 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv15 = new MakingDiv(('div' + num), num++, generateRandomColor());
const makingDiv16 = new MakingDiv(('div' + num), num++, generateRandomColor());

//making new divs inside of the divContainer
function gridB() {
    startGrid = document.createElement('div');
    startGrid.classList.add('gridB');
    divContainer.appendChild(startGrid);
    startBorder();
}
//changing the style of each box
function startBorder() {
    document.querySelectorAll('.gridB').forEach(el => {
        el.style.borderStyle = 'solid';
        el.style.padding = '20px';
        el.style.color = 'black';
        el.style.margin = '10px';
        
    });
}







*/

///i did STEP number 1 wrong!!!!!
/// i have to make a loop, so it generates x amount of numbers
// i have to make the above into a loop, might not need to have a constrictor function if it doesn't have to be named differently