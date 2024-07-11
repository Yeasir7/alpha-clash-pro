// function play(){
//     // hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')

//     // show the playground
//     const playGroundSec = document.getElementById('play-ground')
//     playGroundSec.classList.remove('hidden')
// }

function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);

    // set current alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet)
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}