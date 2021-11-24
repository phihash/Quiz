// const correctSound = new Audio("correct.mp3");
// const falseSound = new Audio("false.mp3");

// const playCorrectSound = () => {
//   correctSound.play();
// }
// const playFalseSound = () => {
//   falseSound.play();
// };

// const correctButton = document.getElementById("correctButton");
// const falseButton = document.getElementById("falseButton");

// correctButton.addEventListener('click',() => {
//   playCorrectSound();
// })
// falseButton.addEventListener('click',() => {
//   playFalseSound();
// })
// でーた
const questions = [
  ["ALSとは?",["筋萎縮性側索硬化症","多発性硬化症 あるいは 僧帽弁狭窄症","再生不良性貧血","原発性胆汁性胆管炎","慢性閉塞性肺疾患"]],
  ["PSPとは?",["進行性核上性麻痺","多発性硬化症 あるいは 僧帽弁狭窄症","再生不良性貧血","原発性胆汁性胆管炎","慢性閉塞性肺疾患"]],
  [
    "MSとは?",["多発性硬化症 あるいは 僧帽弁狭窄症","onn","再生不良性貧血","原発性胆汁性胆管炎","慢性閉塞性肺疾患"]
  ],
  [
    "AAとは?",["再生不良性貧血","筋萎縮性側索硬化症","進行性核上性麻痺","クレアチニンキナーゼ","溶血性貧血"]
  ],
  [
    "AAAとは?",["腹部大動脈瘤","筋萎縮性側索硬化症","進行性核上性麻痺","クレアチニンキナーゼ","溶血性貧血"]
  ],
  [
    "CKとは?",["クレアチンキナーゼ","アセチルコリン","ドパミン","ノルアドレナリン","ネオン"]
  ],
  [
    "PBCとは?",["原発性胆汁性胆管炎","筋萎縮性側索硬化症","進行性核上性麻痺","クレアチニンキナーゼ","溶血性貧血"]
  ],
  [
    "COPDとは?",["慢性閉塞性肺疾患","筋萎縮性側索硬化症","心房細動","原発性胆汁性胆管炎","溶血性貧血"]
  ],
  ["AFとは?",["心房細動","慢性閉塞性肺疾患","筋萎縮性側索硬化症","原発性胆汁性胆管炎","溶血性貧血"]]
];

// ここまでデータ
const candidate = document.getElementById("candidate");
const sentence = document.getElementById("sentence");
const changeButton = document.getElementById("changeButton");

function questionQuantity(){
  for(let i=0;i < 5;i++){
    if(document.querySelectorAll("input[type=radio]")[i].checked){
      return  parseInt(document.querySelectorAll("input[type=radio]")[i].value);
    }
  }
}

function choiceQuestionSetRandomly(){
  let num = questionQuantity();
  let questionset = [];
  for(let i=0;i < num;i++){
    let questionIndex =  Math.floor(Math.random() * questions.length);
    questionset.push(questions[questionIndex]);
  }
  return questionset
}

function displayQuestionSet(){
  let questionset = choiceQuestionSetRandomly();
  let num = questionset.length;
  removeCandidate();
  sentence.textContent = questionset[0][0];
  for(let i =0;i < 5;i++){
    let elmDiv = document.createElement("div");
    let elmInput = document.createElement('input');
    console.log(questionset[0][1]);
    elmInput.type = "radio";
    elmInput.name = "choices";
    elmInput.value = questionset[0][1][i];
    console.log(elmInput);
    elmInput.textContent = questionset[0][1][i];
    candidate.appendChild(elmDiv);
    elmDiv.appendChild(elmInput);
  }
}

function displayCandidate(){
  for(let i =0;i < 5;i++){
    let elm = document.createElement('p');
    elm.textContent = choiceQuestionRandomly();
    candidate.appendChild(elm);
  }
}
function removeCandidate(){
  while( candidate.firstChild ){
    candidate.removeChild( candidate.firstChild );
  }
}


changeButton.addEventListener('click',displayQuestionSet
// () => {
//   changeButton.textContent = "次へ";
//   sentence.textContent = choiceQuestionSetRandomly();
// }
);

