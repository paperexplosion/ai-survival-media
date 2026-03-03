/**
 * 記事内容からカテゴリを自動判定するユーティリティ
 * n8nから自動投稿する際に使用
 */

const CATEGORY_KEYWORDS = {
  'ビジネス・経営': [
    '経営', '事業', '企業', '経営者', '起業', 'スタートアップ',
    'ビジネス', '組織', '戦略', '改革', '意思決定', 'CEO',
    'マネジメント', 'リーダーシップ', '経営判断', 'イノベーション'
  ],
  '働き方改革': [
    'リモート', '在宅', 'テレワーク', 'ハイブリッド', '労働',
    '職場', '環境', '制度', '人事', '採用', '評価', '残業',
    'ワークライフバランス', '柔軟', 'フレックス', '働き方'
  ],
  '人材・教育': [
    '採用', '育成', '研修', '教育', '人材', '学習', 'トレーニング',
    'スキル開発', '人材開発', 'タレント', 'オンボーディング',
    'スクール', '講座', 'e-learning', '学び直し'
  ],
  'キャリア・転職': [
    '転職', 'キャリア', '職種', '求人', 'エージェント', '年収',
    'スカウト', 'ハイクラス', 'キャリアアップ', 'キャリアパス',
    '外資', 'コンサル', 'CXO', '管理職', '副業', 'フリーランス'
  ],
  'ライフ・マネー': [
    '資産', '投資', '税金', '年金', '保険', '節税', '家計',
    '貯蓄', 'お金', '給与', '控除', '確定申告', 'ライフプラン',
    '生活', 'マネー', '金融', '資産形成', '老後'
  ],
  'テクノロジー動向': [
    'AI', '人工知能', 'ChatGPT', 'LLM', '機械学習', 'ディープラーニング',
    '生成AI', 'プロンプト', '自動化', 'DX', 'デジタル', 'ロボット',
    '半導体', 'GPU', 'クラウド', 'テクノロジー', '技術革新'
  ],
  'グローバル経済': [
    '貿易', '関税', '輸出', '輸入', '国際', 'グローバル', '海外',
    '地政学', '外交', '規制', '制裁', '経済圏', '新興国', '先進国',
    '為替', 'G7', 'BRICS', 'サプライチェーン', '国際情勢'
  ],
  'スキル・学習': [
    'スキル', 'リスキリング', 'アップスキリング', '学習', '資格',
    '認定', '研修', 'オンライン講座', 'Udemy', 'Coursera',
    'プログラミング', 'データ分析', '英語', 'TOEIC', '簿記'
  ],
  'セキュリティ・倫理': [
    'セキュリティ', 'サイバー', 'ハッキング', '情報漏洩', '脆弱性',
    '倫理', 'プライバシー', 'データ保護', 'GDPR', 'コンプライアンス',
    'AI倫理', 'バイアス', '透明性', '説明責任', 'リスク管理'
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
  let selectedCategory = 'ビジネス・経営'; // デフォルト

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
