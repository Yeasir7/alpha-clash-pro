// function play(){
//     // hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')
//     // show the playground
//     const playGroundSec = document.getElementById('play-ground')
//     playGroundSec.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key
    // console.log('player pressed', playerPressed)

    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase()
    // console.log('current alphabet',expectedAlphabet)

    if(playerPressed === expectedAlphabet){

        const currentScore = getTextElementValueById('current-score')
        const updateScore = currentScore + 1
        setTextElementValueById('current-score', updateScore)
        
        // console.log('you got a point')
        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText
        // const currentScore = parseInt(currentScoreText)

        // const newScore = currentScore + 1

        // currentScoreElement.innerText = newScore

        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else{

        const currentLife = getTextElementValueById('current-life')
        const updateLife = currentLife - 1
        setTextElementValueById('current-life', updateLife)

        if(updateLife === 0){
            gameOver()
        }

        // console.log('you loss a point')

        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifeText = currentLifeElement.innerText
        // const currentLife = parseInt(currentLifeText)

        // const newScore = currentLife - 1

        // currentLifeElement.innerText = newScore
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);

    // set current alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet)
}

function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)

    continueGame();
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
}