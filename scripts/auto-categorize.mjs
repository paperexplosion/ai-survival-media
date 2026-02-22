/**
 * 記事内容からカテゴリを自動判定するユーティリティ
 * n8nから自動投稿する際に使用
 */

const CATEGORY_KEYWORDS = {
  'マインドセット': [
    'マインド', '心構え', '考え方', '意識', '姿勢', '覚悟',
    '生き方', '価値観', '信念', '自己実現', '成長', '変化',
    'サバイバル', '生存', '危機感', '焦燥', '不安'
  ],
  'ハイクラス転職': [
    '転職', 'エージェント', '年収', 'キャリアアップ', 'ハイクラス',
    '外資', 'コンサル', '経営', '管理職', 'マネジメント',
    'エグゼクティブ', 'CXO', 'スカウト', '求人'
  ],
  'AI時代のキャリア': [
    'AI', '人工知能', '自動化', '機械学習', 'ChatGPT', 'LLM',
    'ロボット', 'テクノロジー', 'デジタル', 'イノベーション',
    'DX', '技術革新', 'プロンプト', '生成AI'
  ],
  '職種別戦略': [
    'エンジニア', 'デザイナー', 'プログラマー', '開発者',
    'クリエイター', 'ライター', '営業', 'マーケター',
    '事務職', 'データ分析', 'プロダクトマネージャー'
  ],
  'キャリア戦略': [
    '戦略', 'プラン', 'ロードマップ', 'スキルアップ', '学習',
    '資格', '副業', 'フリーランス', '独立', '起業',
    'キャリアパス', 'キャリアデザイン', 'リスキリング'
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
  let selectedCategory = 'AI時代のキャリア'; // デフォルト

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
