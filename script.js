const questions = [
  "同じパスワードを複数のサービスで使っている",
  "知らない送信元のリンクを開くことがある",
  "フリーWi-Fiでログインが必要なサービスを使う",
  "OSやアプリの更新を後回しにしがち",
  "SNSに個人情報を載せることがある",
  "二段階認証を設定していないサービスがある",
  "不審なポップアップや警告画面を見たことがある",
  "アプリを公式ストア以外から入れたことがある",
  "個人情報を入力する際、URLを確認しないことがある",
  "知らない人からの友達申請を承認することがある",
  "パスワードをメモ帳やスクショで保存している",
  "セキュリティソフトを入れていない、または期限切れ",
  "ネット通販で安すぎるサイトを利用したことがある",
  "利用していないアカウントを放置している",
  "フィッシング詐欺について詳しく知らない"
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");

// 最初の質問表示
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
  let resultClass = "";

  if (score <= 10) {
    result = "低リスク";
    advice = "安全意識が高い状態です。今後も継続してセキュリティ対策を行いましょう。";
    resultClass = "low";
  } else if (score <= 20) {
    result = "注意";
    advice = "基本的な対策はできていますが、パスワード管理や更新頻度を見直すとより安全です。";
    resultClass = "medium";
  } else if (score <= 30) {
    result = "高リスク";
    advice = "フィッシング詐欺や情報漏洩に遭う可能性があります。対策を見直しましょう。";
    resultClass = "high";
  } else {
    result = "非常に高リスク";
    advice = "早急なセキュリティ対策が必要です。";
    resultClass = "very-high";
  }

  document.body.innerHTML = `
    <div class="container">
      <h1>診断結果</h1>

      <div class="card">
        <h2 class="result ${resultClass}">${result}</h2>
        <p>あなたのリスクスコア：${score}</p>
        <p>${advice}</p>

        <button class="restart-button" onclick="restart()">
          もう一度診断する
        </button>

        <p style="font-size: 0.85em; color: gray;">
          ※本診断は教育目的であり、実際の被害を保証するものではありません。
        </p>
      </div>
    </div>
  `;
}
function restart() {
    location.reload();
  }

