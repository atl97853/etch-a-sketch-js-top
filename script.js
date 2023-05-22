// // Set range input 
// const inputRange = document.getElementById('my-slider');
// const divRange = document.getElementById('slider-value');


// const idk = inputRange.addEventListener('click', () => {
//     const number = Number(inputRange.value);
//     return number;
// });

// Variables
const divMain = document.querySelector('.main-container');
const divsArray = [];

// let divsTotal = Number(prompt('Max: 32 pixel'));
let divsTotal = 16;
let pixelsTotal = 640/divsTotal;

// Create array with divs 
for (let i = 0; i < divsTotal * divsTotal; i++) {
    let divNew = document.createElement('div');
    divNew.classList.add('div-new');
    // Set div size 
    divNew.style.width = `${pixelsTotal}px`;
    divNew.style.height = `${pixelsTotal}px`;

    divsArray.push(divNew);
};

// Testing array with divs 
console.log(divsArray.length);
console.log(divsArray);

// Append divs in the DOM document
divsArray.forEach(div => divMain.appendChild(div)); 

// Add and change divs color
divsArray.forEach(div => div.addEventListener('click', (div) => {
    div.target.style.background = 'blue'; 
}));

