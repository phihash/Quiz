const correctSound = new Audio("correct.mp3");
const falseSound = new Audio("false.mp3");

const storedQuestions = [
  [["ALSとは?","筋萎縮性側索硬化症"],["筋萎縮性側索硬化症","多発性硬化症","再生不良性貧血","原発性胆汁性胆管炎","慢性閉塞性肺疾患"]],
  [["PSPとは?","進行性核上性麻痺"],["進行性核上性麻痺","僧帽弁狭窄症","再生不良性貧血","原発性胆汁性胆管炎","慢性閉塞性肺疾患"]],
  [["MSとは?","多発性硬化症 あるいは 僧帽弁狭窄症"],["多発性硬化症 あるいは 僧帽弁狭窄症","過換気症候群","再生不良性貧血","原発性胆汁性胆管炎","慢性閉塞性肺疾患"]  ],
  [["AAとは?","再生不良性貧血"],["再生不良性貧血","筋萎縮性側索硬化症","進行性核上性麻痺","過換気症候群","溶血性貧血"]],
  [["AAAとは?","腹部大動脈瘤"],["腹部大動脈瘤","筋萎縮性側索硬化症","進行性核上性麻痺","トリプルエー","溶血性貧血"]  ],
  [["CKとは?","クレアチンキナーゼ"],["クレアチンキナーゼ","アセチルコリン","ドパミン","ノルアドレナリン","ニコチン"]  ],
  [["PBCとは?","原発性胆汁性胆管炎"],["原発性胆汁性胆管炎","原発性硬化性胆管炎","進行性核上性麻痺","多発性嚢胞腎","溶血性貧血"]],
  [["COPDとは?","慢性閉塞性肺疾患"],["慢性閉塞性肺疾患","筋萎縮性側索硬化症","心房細動","原発性胆汁性胆管炎","溶血性貧血"]  ],
  [["AFとは?","心房細動"],["心房細動","慢性閉塞性肺疾患","筋萎縮性側索硬化症","原発性胆汁性胆管炎","溶血性貧血"]],
  [["CHFとは?","うっ血性心不全"],["うっ血性心不全","狭心症","心房細動","慢性閉塞性肺疾患","筋萎縮性側索硬化症",]],
  [["CDDPとは？","シスプラチン"],["シスプラチン","ドセタキセル","アドリアマイシン","アロプリノール","シダグリプチン"]],
  [["AVM","脳動静脈奇形"],["脳動静脈奇形","筋萎縮性側索硬化症","進行性核上性麻痺","悪性リンパ腫","溶血性貧血"]],
  [["APSとは？","抗リン脂質抗体症候群"],["抗リン脂質抗体症候群","筋萎縮性側索硬化症","アセチルコリン","アルツハイマー病","ハンチントン病"]],
  [["パーキンソン病診断に必須な徴候は？","無動"],["無動","そんなものはない","安静時振戦","筋強剛","姿勢保持反射障害"]],
  [["VFとは？","心室細動"],["心室細動","心房細動","過換気症候群","原発性胆汁性胆管炎","洞調律不全症候群"]],
  [["MMとは？","多発性骨髄腫"],["多発性骨髄腫","心房細動","過換気症候群","原発性胆汁性胆管炎","洞調律不全症候群"]],
  [["メトトレキサートの副作用でないものは？","糖尿病"],["悪性リンパ腫","間質性肺炎","汎血球減少","そんなものはない","糖尿病"]],
  [["DBS療法は何の病気の治療？","パーキンソン病"],["パーキンソン病","悪性リンパ腫","間質性肺炎","汎血球減少","糖尿病"]],
  [["MNとは？","膜性腎症"],["膜性腎症","多発性骨髄腫","間質性肺炎","汎血球減少","糖尿病"]],
  [["CIDPとは？","慢性炎症性脱髄性多発神経炎"],["膜性腎症","多発性骨髄腫","慢性心不全","慢性炎症性脱髄性多発神経炎","糖尿病"]],
  [["パラコート中毒の禁忌は？","酸素"],["酸素","ノルアドレナリン","アセチルコリン","ドパミン","ドブタミン"]],
  [["CBDとは？","大脳皮質基底核変性症"],["膜性腎症","多発性骨髄腫","慢性心不全","大脳皮質基底核変性症","過換気症候群"]],
  [["PCPとは？","ニューモシスチス肺炎"],["ニューモシスチス肺炎","間質性肺炎","肺結核","慢性閉塞性肺疾患","過換気症候群"]],
  [["妊娠高血圧症候群に対する治療薬として適切なのは？","メチルドパ"],["メチルドパ","バルサルタン","カプトプリル","ミノマイシン","レボフロキサシン"]],
  [["関節リウマチに関与する炎症性サイトカインは？","IL-6"],["Il-5","IL-10","IL-6","IL-2","IL-12"]],
  [["ESRとは？","赤血球沈降速度"],["皮膚筋炎","サルコイドーシス","ベーチェット病","リウマトイド因子","赤血球沈降速度"]],
  [["MMP3とは？","軟骨成分を破壊するタンパク質"],["軟骨成分を破壊するタンパク質","多発性嚢胞腎","多発性硬化症","脂質代謝異常に寄与するタンパク質","多発性骨髄種"]],
  [["RAとは？","関節リウマチ"],["関節リウマチ","多発性嚢胞腎","腎梗塞","網膜色素変性症","多発性骨髄種"]],
  [["本来抗マラリア薬であったSLEに有用な薬は？","ヒドロキシクロロキン"],["ヒドロキシクロロキン","ダプトマイシン","セファマイシン","アジスロマイシン","レボフロキサシン"]],
  [["膀胱炎の原因菌として多いものは？","大腸菌"],["大腸菌","肺炎球菌","モラクセラカタラーリス","淋菌","表皮ブドウ球菌"]],
  [["抗精神病薬の副作用はどれか?","乳汁分泌"],["乳汁分泌","歯肉の肥厚","小脳失調","下痢","多毛"]],
  [["せん妄のリスクファクターでないのは?","喫煙"],["肺炎","喫煙","低ナトリウム血症","尿道カテーテル留置","ベンゾジアゼピン系睡眠薬"]],
  [["せん妄で正しいのは?","夜間に起きやすい"],["夜間に起きやすい","自宅で起きやすい","後遺症を残しやすい","解離症は原因となる","自発的な言動が認められれば否定できる"]],
  [["うつ病でみられるのは?","思考制止"],["思考制止","思考途絶","妄想知覚","思考化声","アンビバレンス"]],
  [["ベンゾジアゼピン系薬に関して正しいものは?","使用は短時間で切り上げる"],["離脱症状は起きない","統合失調症の第一選択である","アヘンより身体依存が強い","前立腺肥大症には禁忌","使用は短時間で切り上げる"]],
  [["うつ病の病前性格として誤っているのは?","敏感性格"],["循環気質","粘着気質","メランコリー親和型","敏感性格","内向性"]],
  [["強迫性障害の訴えとして考えにくいのは?","他人が自分の臭いを嫌がって逃げます"],["触ると私のばい菌が皆に感染すると考えてしまいます","数字をみたら100まで数えます","家中の鍵を探します","他人が自分の臭いを嫌がって逃げます","スーパーに行くと盗んでしまうのではないかと心配です"]],
  [["うつ病で正しいのは?","産褥期うつ病は後に双極性を発症することが多い"],["夕方に抑うつ気分が著しい","男女で発症率は同じくらいである","自殺企図は制止の強い病極期にみられやすい","罪責感を認めることもあるが妄想までには至らない","産褥期うつ病は後に双極性を発症することが多い"]],
  [["心身症の治療で誤っているのは？","ベンゾジアゼピン系抗不安薬"],["自律訓練法","身体症状に対する対症療法","認知行動療法","心理教育","ベンゾジアゼピン系抗不安薬"]],
  [["使用を継続しているうちにフラッシュバックが出現するのはどれか","アンフェタミン"],["ベンゾジアゼピン系抗不安薬","アヘン類","アンフェタミン","アルコール","コカイン"]],
  [["自我障害はどれか？","思考奪取"],["思考奪取","滅裂思考","思考途絶","思考制止","観念奔逸"]],
  [["統合失調症の症状として誤っているのは？","カタプレキシー"],["無為","両価性","病識の障害","疎通性の障害","カタプレキシー"]],
  [["双極性の病前性格は?","循環気質"],["粘着性格","爆発性格","無力性格","森田神経質","循環気質"]],
  [["せん妄について正しいのは?","日によって症状が変動する"],["嫉妬妄想を伴う","幻聴が出やすい","見当識は保たれる","カタレプシーがみられる","日によって症状が変動する"]],
  [["病気不安症(心気症)について正しいのは?","病状のねつ造を引き起こすことがある"],["病状のねつ造を引き起こすことがある","小児期に多い","必要な検査などは拒否する","生涯有病率は1%未満である","6か月以上継続することはまれである"]],
  [["意欲と行動の異常について正しいのは?","制止が極度になると緊張病性昏迷に至る"],["制止が極度になると緊張病性昏迷に至る","昏迷は意識の混濁を伴う","統合失調症で自殺は稀である","行為心迫は統合失調症の興奮状態で認められる","強迫行為で、本人はその不合理性を認識していない"]],
  [["組み合わせで正しいのは?","森田療法-あるがままの自分の受け入れ"],["森田療法-あるがままの自分の受け入れ","精神分析-認知機能","行動療法-社会生活リズム","自律訓練法-リワークプログラム","箱庭療法-統合失調症"]],
  [["自我障害でないのは?","次々アイディアが湧いてきて、過去の自分を超越しました"],["病々アイディアが湧いてきて、過去の自分を超越しました","わたしは昨年違う自分になりました","なんだか景色を見ても絵のように見えますし、生きている実感がありません","半年前から時々、自分の日記に覚えのないことが書かれています","頭の中に小人がいてわたしの脳を操作します"]],
  [["正しいのはどれか?","夜尿症の子は夜中目が覚めにくい"],["チックは言いたいことを言う","睡眠時遊行症の症状は、周囲から止められると止めることができる","夜尿症の子は夜中目が覚めにくい","Tourette症候群は成人するまでに治ることが多い","夜驚症の子は睡眠中の出来事を覚えている"]],
  [["組み合わせで誤っているのは?","選択的セロトニン再取り込み阻害薬-水中毒"],["選択的セロトニン再取り込み阻害薬-水中毒","三環系抗うつ薬-便秘","非定型抗精神病薬-糖尿病性ケトアシドーシス","ブチロフェノン系抗精神病薬-悪性症候群","カルバマゼピン-SJS"]],
];
// ここまでデータ
let startFlag = true;
const candidate = document.getElementById("candidate");
const sentence = document.getElementById("sentence");
const changeButton = document.getElementById("changeButton");
const quantitiesList = document.getElementsByName('quantities');
const scoreArea = document.getElementById('scoreArea');
const tweetButtonArea = document.getElementById('tweetButtonArea');

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

    getScoreRate(){
      return this.score/this.initCount;
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
//<a href="" class="twitter-hashtag-button" data-text="よく頑張りました" data-show-count="false">Tweet #Quiz</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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
    //1回目以降
  let bar = document.getElementsByName('choices');
  if(isChecked(bar) == false && bar[0].name == "choices"){
    //終了時のリロード時に選択してくださいとならないようにした
    hoge.setButtonName("選択してください");
  }else{
    //選択肢がクリックされている場合
    if(isChecked(bar) == hoge.getAnswer()){
      hoge.plusScore();
      correctSound.play();
    }else{
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
      const resultSentence = document.createElement("p");
      const tweetButton = document.createElement("a");
      const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=Quiz&ref_src=twsrc%5Etfw';
      tweetButton.setAttribute('href',hrefValue);
      tweetButton.className = "twitter-share-button";
      if(hoge.getScoreRate() == 1){
        tweetButton.setAttribute('data-text',hoge.getInitCount()+"点中"+hoge.getScore()+"点でした。素晴らしいです！！");
      }else if(hoge.getScoreRate() > 0.8){
        tweetButton.setAttribute('data-text',hoge.getInitCount()+"点中"+hoge.getScore()+"点でした。頑張りましたね。");
      }else if(hoge.getScoreRate() > 0.5){
        tweetButton.setAttribute('data-text',hoge.getInitCount()+"点中"+hoge.getScore()+"点でした。成長が楽しみです");
      }else if(hoge.getScoreRate() > 0.3){
        tweetButton.setAttribute('data-text',hoge.getInitCount()+"点中"+hoge.getScore()+"点でした。もう少し頑張りましょう");
      }else{
        tweetButton.setAttribute('data-text',hoge.getInitCount()+"点中"+hoge.getScore()+"点でした。やる気ありますか？");
      }
      tweetButton.innerText = 'Tweet #Quiz';
      resultSentence.textContent = "あなたの点数は"+hoge.getInitCount()+"点中"+hoge.getScore()+"点です";
      candidate.appendChild(resultSentence);
      tweetButtonArea.appendChild(tweetButton);
      const script = document.createElement('script');
      script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      tweetButton.appendChild(script);
      hoge.setQuizSentence("お疲れさまでした");
      hoge.setButtonName("終了");
      if(changeButton.textContent == "終了"){
        changeButton.addEventListener('click',() => {
          location.reload();
        })
      }
    }
  }
  
})
  
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