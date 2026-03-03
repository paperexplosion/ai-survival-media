/**
 * 記事内容からカテゴリを自動判定するユーティリティ
 * n8nから自動投稿する際に使用
 */

const CATEGORY_KEYWORDS = {
  'AIサバイバル戦略': [
    '生き残る', 'サバイバル', '生存', '戦略', '対策', '備え',
    '危機', 'リスク', '脅威', '置き換え', '代替', '淘汰',
    '競争', '差別化', '優位性', '防衛', '保身'
  ],
  'キャリア思考法': [
    '思考', 'マインドセット', '価値観', '哲学', '本質', '原則',
    '視点', '捉え方', '考え方', '意識', '姿勢', '在り方',
    'パラダイム', '転換', '発想', '内省', '自己認識'
  ],
  '体験・ドキュメンタリー': [
    'モノローグ', '私は', '私が', '告白', '体験', '経験',
    '物語', 'ストーリー', 'ドキュメンタリー', '実録', '記録',
    '深夜', '戦慄', '恐怖', '確信', '気づき', '発見'
  ],
  'AI市場分析': [
    'ニュース', '報じ', '発表', '株価', '市場', '業界',
    '企業', 'スタートアップ', '投資', '資金', '規模',
    '動向', 'トレンド', '予測', '見通し', 'Google', 'OpenAI'
  ],
  'スキル実践テクニック': [
    'プロンプト', '使い方', '方法', 'コツ', 'テクニック', '実践',
    'ツール', '機能', 'コード', 'エンジニア', 'デザイナー',
    '具体的', 'ステップ', '手順', '実装', 'やり方'
  ],
  'キャリア・転職': [
    '転職', 'キャリア', '年収', 'ハイクラス', 'エージェント',
    '求人', 'スカウト', '管理職', 'CXO', '昇進',
    '副業', 'フリーランス', '独立', '起業', 'ポジション'
  ],
  'ビジネス・経営': [
    '経営', '事業', 'ビジネスモデル', '組織', '改革',
    'マネジメント', 'リーダーシップ', '意思決定', 'CEO',
    '戦略', 'イノベーション', '成長', '変革'
  ],
  '働き方・ライフスタイル': [
    'リモート', '在宅', 'ワークライフバランス', '働き方',
    '柔軟', '生活', 'ライフスタイル', '環境', '制度',
    '時間', '効率', '生産性', 'フレックス'
  ],
  '未来予測・トレンド': [
    '未来', '10年後', '2030年', '予測', '見通し',
    '変化', '進化', '革命', '激変', '転換点',
    'これから', '次世代', '将来', 'トレンド', '潮流'
  ]
};

/**
 * テキストから最適なカテゴリを判定
 * @param {string} title - 記事タイトル
 * @param {string} content - 記事本文
 * @param {string} lead - リード文（オプション）
 * @returns {string} 判定されたカテゴリ名
 */
export function categorizeArticle(title, content, lead = '') {
  const fullText = `${title} ${lead} ${content}`.toLowerCase();

  const scores = {};

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    scores[category] = 0;

    for (const keyword of keywords) {
      const regex = new RegExp(keyword, 'gi');
      const matches = fullText.match(regex);
      if (matches) {
        scores[category] += matches.length;
      }
    }
  }

  // タイトル内にキーワードがある場合は重み付け
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    for (const keyword of keywords) {
      if (title.toLowerCase().includes(keyword)) {
        scores[category] += 5;
      }
    }
  }

  // スコアが最も高いカテゴリを返す
  let maxScore = 0;
  let selectedCategory = 'AI市場分析'; // デフォルト

  for (const [category, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      selectedCategory = category;
    }
  }

  return selectedCategory;
}

/**
 * CLIからの利用例
 */
if (import.meta.url === `file://${process.argv[1]}`) {
  const title = process.argv[2] || '';
  const content = process.argv[3] || '';
  const lead = process.argv[4] || '';

  if (!title && !content) {
    console.error('使用方法: node auto-categorize.mjs "タイトル" "本文" ["リード文"]');
    process.exit(1);
  }

  const category = categorizeArticle(title, content, lead);
  console.log(category);
}
