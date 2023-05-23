    // Variables
    const divMain = document.querySelector('.grid-container');
    const divsArray = [];

    // let divsTotal = Number(prompt('Max: 32 pixel'));
    let divsTotal = 32;
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
        div.target.style.background = '#1E2022'; 
}));

