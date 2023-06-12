const card = document.querySelector('.card__inner');
const myAudio = document.getElementById('my-audio');
const playBtn = document.getElementById('play');
const cardAttributes = document.getElementsByClassName('card__attributes')

document.addEventListener("DOMContentLoaded", () => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    })
    
    playBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        myAudio.play();
    })
});
