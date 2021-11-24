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
const questions = {
    "ALS":["筋萎縮性側索硬化症","多発性硬化症 あるいは 僧帽弁狭窄症","再生不良性貧血","原発性胆汁性胆管炎","慢性閉塞性肺疾患"],
    "PSP" : ["進行性核上性麻痺"],
    "CK":["クレアチニンキナーゼ"],
    "HA":["溶血性貧血"],
    "PNH":["発作性夜間ヘモグロビン尿症"],
    "AIHA":["自己免疫性溶血性貧血"],
    "HL":["Hodgkinリンパ腫"],
    "PCP":["ニューモシスチス肺炎"],
    "DM":["糖尿病"],
    "IVR":["画像下治療"],
    "AD":["アルツハイマー病 あるいは 常染色体優性遺伝"],
    "AAA":["腹部大動脈瘤","筋萎縮性側索硬化症","進行性核上性麻痺","クレアチニンキナーゼ","溶血性貧血"],
    "VF":["心室細動"],
    "AF":["心房細動"],
    "MS":["多発性硬化症 あるいは 僧帽弁狭窄症"],
    "AA":["再生不良性貧血","筋萎縮性側索硬化症","進行性核上性麻痺","クレアチニンキナーゼ","溶血性貧血"],
    "PBC":["原発性胆汁性胆管炎","筋萎縮性側索硬化症","進行性核上性麻痺","クレアチニンキナーゼ","溶血性貧血"],
    "COPD":["慢性閉塞性肺疾患","筋萎縮性側索硬化症","心房細動","原発性胆汁性胆管炎","溶血性貧血"]
  
};
// ここまでデータ
const candidate = document.getElementById("candidate");
const sentence = document.getElementById("sentence");
const changeButton = document.getElementById("changeButton");

function choiceQuestionRandomly(){
  const num =  Math.floor(Math.random() * Object.keys(questions).length);
  console.log(num);
  return num;
}

// 書き換え
function rewrite(){
  sentence.textContent = "";
  sentence.textContent = choiceQuestionRandomly();
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
function processCandidate(){
  removeCandidate();
  displayCandidate();
}
changeButton.addEventListener('click',processCandidate);

