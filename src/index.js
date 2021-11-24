let clickCounter = 0;
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
  [["AFとは?","心房細動"],["心房細動","慢性閉塞性肺疾患","筋萎縮性側索硬化症","原発性胆汁性胆管炎","溶血性貧血"]]
];
// ここまでデータ
let startFlag = true;
const candidate = document.getElementById("candidate");
const sentence = document.getElementById("sentence");
const changeButton = document.getElementById("changeButton");
const quantitiesList = document.getElementsByName('quantities');

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
      num = arr[i].value;
      return true;
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
    hoge.setButtonName("次の問題");
    let tmp = hoge.getSentence();
    hoge.setQuizSentence(tmp);
    startFlag = false;
    displayQuestion();

  }
    //それ以降
    let bar = document.getElementsByName('choices');
    
    console.log(bar);
    console.log(isChecked(bar));
  if(isChecked(bar) == false){
    hoge.setButtonName("選択してください");
  }else{
    hoge.setButtonName("次の問題");
  }
  
})
console.log(hoge.getAnswerListInQuestionList());
console.log(hoge.getQuestionList());
console.log(hoge.getSentence());
  
 function displayQuestion(){
   let questionset = hoge.getAnswerListInQuestionList();
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
    console.log(elmDiv);
  }
}

function removeCandidate(){
  while( candidate.firstChild ){
    candidate.removeChild(candidate.firstChild );
  }
}