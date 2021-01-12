const selection = document.querySelector('.js-tutorial-selection');

function getTutorialPage(event) {
    console.log(event);
}

selection.addEventListener('click', getTutorialPage);