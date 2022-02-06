
const startEl = document.querySelector('[data-start]');
const stopEl = document.querySelector('[data-stop]');


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const changesBackgroundColorOfBody = function() {
    const currentColor = `${getRandomHexColor()}`;
    document.body.style.backgroundColor = currentColor;
 }
  
const onClickChangeColor = () => {
    setTimeout(changesBackgroundColorOfBody, 1000);
  };
  

startEl.addEventListener('click', onClickChangeColor);

stopEl.removeEventListener('click', onClickChangeColor);