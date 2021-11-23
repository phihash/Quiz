const correctSound = new Audio("correct.mp3");
const falseSound = new Audio("false.mp3");

const playCorrectSound = () => {
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