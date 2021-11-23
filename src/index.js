 const correctSound = new Audio("");
// const falseSound = new Audio("../audio/false");

const playCorrectSound = () => {
  correctSound.src = '../audio/correct.mp3';
  correctSound.play();
}
const playFalseSound = () => {
  falseSound.play();
};

const correctButton = document.getElementById("correctButton");
const falseButton = document.getElementById("falseButton");

correctButton.addEventListener('click',() => {
  playCorrectSound();
})
falseButton.addEventListener('click',() => {
  playFalseSound();
})