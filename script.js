const divMain = document.querySelector('.main-container');

// array of divs 

const divsArray = [];

for (let i = 0; i < 32 * 32; i++) {
    let divNew = document.createElement('div');
    divNew.classList.add('div-new');
    divsArray.push(divNew);
}

console.log(divsArray.length);
console.log(divsArray);

divsArray.forEach(div => divMain.appendChild(div));

