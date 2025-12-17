const questions = [
  "同じパスワードを複数のサービスで使っている",
  "知らない送信元のリンクを開くことがある",
  "フリーWi-Fiでログインが必要なサービスを使う",
  "OSやアプリの更新を後回しにしがち",
  "SNSに個人情報を載せることがある"
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
questionEl.textContent = questions[current];

function answer(point) {
  score += point;
  current++;

  if (current < questions.length) {
    questionEl.textContent = questions[current];
  } else {
    showResult();
  }
}

function showResult() {
  let result = "";
  let advice = "";

  if (score <= 5) {
    result = "低リスク";
    advice = "安全意識が高い状態です。今後も継続しましょう。";
  } else if (score <= 10) {
    result = "注意";
    advice = "パスワード管理や更新を見直すとより安全です。";
  } else if (score <= 15) {
    result = "高リスク";
    advice = "フィッシングや情報漏洩の可能性があります。";
  } else {
    result = "非常に高リスク";
    advice = "早急にセキュリティ対策が必要です。";
  }

  document.body.innerHTML = `
    <h1>診断結果</h1>
    <h2>${result}</h2>
    <p>${advice}</p>
  `;
}

