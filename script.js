// Functions

// Variables
const divMain = document.querySelector('.main-container');
 let size = Number(prompt('Create your grid'));
 let totalPixels = size * 20;
// Create array with divs 
const divsArray = [];
for (let i = 0; i < size * size; i++) {
    let divNew = document.createElement('div');
    divNew.classList.add('div-new');
    divsArray.push(divNew);
};
// Testing array with divs 
console.log(divsArray.length);
console.log(divsArray);
// Append divs in the DOM
divsArray.forEach(div => divMain.appendChild(div)); 

// set grid 

divMain.style.maxWidth = `${totalPixels}px`;
divMain.style.maxHeight = `${totalPixels}px`;