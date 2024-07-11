function play(){
    // hide the home screen. to hide the screen add the class hidden to the home section
    const homeSection = document.getElementById('home-screen')
    homeSection.classList.add('hidden')

    // show the playground
    const playGroundSec = document.getElementById('play-ground')
    playGroundSec.classList.remove('hidden')
}