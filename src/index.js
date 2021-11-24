const correctSound = new Audio("correct.mp3");
const falseSound = new Audio("false.mp3");

const storedQuestions = [
  [["ALSとは?","筋萎縮性側索硬化症"],["筋萎縮性側索硬化症","多発性硬化症 あるいは 僧帽弁狭窄症","再生不良性貧血","原発性胆汁性胆管炎","慢性閉塞性肺疾患"]],
  [["PSPとは?","進行性核上性麻痺"],["進行性核上性麻痺","多発性硬化症 あるいは 僧帽弁狭窄症","再生不良性貧血","原発性胆汁性胆管炎","慢性閉塞性肺疾患"]],
  [
    ["MSとは?","多発性硬化症 あるいは 僧帽弁狭窄症"],["多発性硬化症 あるいは 僧帽弁狭窄症","onn","再生不良性貧血","原発性胆汁性胆管炎","慢性閉塞性肺疾患"]
  ],
  [
    ["AAとは?","再生不良性貧血"],["再生不良性貧血","筋萎縮性側索硬化症","進行性核上性麻痺","クレアチニンキナーゼ","溶血性貧血"]
  ],
  [
    ["AAAとは?","腹部大動脈瘤"],["腹部大動脈瘤","筋萎縮性側索硬化症","進行性核上性麻痺","クレアチニンキナーゼ","溶血性貧血"]
  ],
  [
    ["CKとは?","クレアチンキナーゼ"],["クレアチンキナーゼ","アセチルコリン","ドパミン","ノルアドレナリン","ネオン"]
  ],
  [
    ["PBCとは?","原発性胆汁性胆管炎"],["原発性胆汁性胆管炎","筋萎縮性側索硬化症","進行性核上性麻痺","クレアチニンキナーゼ","溶血性貧血"]
  ],
  [
    ["COPDとは?","慢性閉塞性肺疾患"],["慢性閉塞性肺疾患","筋萎縮性側索硬化症","心房細動","原発性胆汁性胆管炎","溶血性貧血"]
  ],
  [["AFとは?","心房細動"],["心房細動","慢性閉塞性肺疾患","筋萎縮性側索硬化症","原発性胆汁性胆管炎","溶血性貧血"]],
  [["CHFとは?","うっ血性心不全"],["うっ血性心不全","ssa","心房細動","慢性閉塞性肺疾患","筋萎縮性側索硬化症",]],
  [["CDDP","シスプラチン"],["シスプラチン","ドセタキセル","sa","アロプリノール","sa"]],
  [["AVM","脳動静脈奇形"],["脳動静脈奇形","筋萎縮性側索硬化症","進行性核上性麻痺","クレアチニンキナーゼ","溶血性貧血"]],
  [["APS","抗リン脂質抗体症候群",],["抗リン脂質抗体症候群","筋萎縮性側索硬化症","sa","sa","sss"]],
];
// ここまでデータ
let startFlag = true;
const candidate = document.getElementById("candidate");
const sentence = document.getElementById("sentence");
const changeButton = document.getElementById("changeButton");
const quantitiesList = document.getElementsByName('quantities');
const scoreArea = document.getElementById('scoreArea');

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function quantityFromQuantitiesList(arr){
  let num = 0;
  for(let i=0;i < arr.length;i++){
    if(arr[i].checked){
      num = arr[i].value;
    }
  }
  return num;
}

function isChecked(arr){
  for(let i=0;i < arr.length;i++){
    if(arr[i].checked){
      return arr[i].value;
    }
  }
  return false;
}

class QuizSuite{
    score = 0;
    count = 0;
    constructor(questions){
        // thisキーワードは現在のオブジェクトを取得します。
        this.questions = questions;
    }

    getListLength(){
      return this.questions.length;
    }

    ShiftedQuestionList(){
      this.questions.shift();
      return this.questions;
    }

    setInitCount(num){
      this.initCount = num;
    }

    getInitCount(){
      return this.initCount;
    }

    setQuizSentence(string){
      sentence.textContent = string; 
    }

    getQuestionList(){
      return this.questions;
    }
    getAnswerListInQuestionList(){
      return this.questions[0][1];
    }
    setButtonName(string){
      changeButton.textContent = string;
    }

    setCount(num){
      this.count = num;
    }

    degreeCount(){
      this.count--;
    }

    getCount(){
      return this.count;
    }

    getSentence(){
      return this.questions[0][0][0];
    }

    getAnswer(){
      return this.questions[0][0][1];
    }

    getScore(){
      return this.score;
    }

    plusScore(){
      this.score++;
    }
}

function shuffleStoredQuestions(arr){
  shuffle(arr);
  shuffle(arr);
  let chosenQuestions = [];
  chosenQuestions = [...arr];
  return chosenQuestions;
}

hoge = new QuizSuite(shuffleStoredQuestions(storedQuestions));

changeButton.addEventListener("click",() => {
  if(startFlag){
    //1回目
    hoge.setCount(quantityFromQuantitiesList(quantitiesList));
    hoge.setInitCount(quantityFromQuantitiesList(quantitiesList));
    hoge.setButtonName("次の問題");
    let tmp = hoge.getSentence();
    hoge.setQuizSentence(tmp);
    startFlag = false;
    displayQuestion();
  }
    //それ以降
    let bar = document.getElementsByName('choices');
    
  if(isChecked(bar) == false){
    hoge.setButtonName("選択してください");
  }else{
    //選択肢がクリックされている場合
    if(isChecked(bar) == hoge.getAnswer()){
      console.log("正解");
      hoge.plusScore();
      correctSound.play();
    }else{
      console.log("間違い");
      falseSound.play();
    }
    scoreArea.textContent = hoge.getScore()+"点";
    hoge.setButtonName("次の問題");
    hoge.ShiftedQuestionList();
    displayQuestion();
    hoge.setQuizSentence(hoge.getSentence());
    hoge.degreeCount();
    if(hoge.getCount() == 0){
      removeCandidate();
      let tmpP = document.createElement("p");
      tmpP.textContent = "あなたの点数は"+hoge.getInitCount()+"点中"+hoge.getScore()+"点です";
      candidate.appendChild(tmpP);
      hoge.setQuizSentence("お疲れさまでした");
      hoge.setButtonName("終了");
      setTimeout("location.reload()",2500);
    }
  }
  
})
console.log(hoge.getAnswerListInQuestionList());
console.log(hoge.getQuestionList());

  
 function displayQuestion(){
   let questionset = hoge.getAnswerListInQuestionList();
   shuffle(questionset);
   removeCandidate();
  for(let i =0;i < 5;i++){
    let elmDiv = document.createElement("div");
    let elmInput = document.createElement('input');
    let elmLabel = document.createElement('label');
    elmInput.type = "radio";
    elmInput.name = "choices";
    elmInput.value = questionset[i];
    elmLabel.innerText = questionset[i];
    elmLabel.prepend(elmInput);
    candidate.appendChild(elmDiv);
    elmDiv.appendChild(elmLabel);
  }
}

function removeCandidate(){
  while( candidate.firstChild ){
    candidate.removeChild(candidate.firstChild );
  }
}