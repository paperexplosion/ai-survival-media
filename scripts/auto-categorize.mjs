/**
 * 記事内容からカテゴリを自動判定するユーティリティ
 * n8nから自動投稿する際に使用
 */

const CATEGORY_KEYWORDS = {
  '🌊 AI時代の本質と世界観': [
    '本質', '世界観', 'パラダイムシフト', '時代', '社会', 'OS',
    '構造', '仕組み', 'システム', '根本', '基盤', '前提',
    '文明', '歴史', '転換点', '革命', '激変', '衝撃'
  ],
  '💣 AIと雇用・労働の崩壊': [
    '雇用', '仕事を奪', '失業', '職を失う', '代替', '置き換え',
    '労働', '働く', '給料', '収入', '賃金', '削減',
    '淘汰', '消滅', '終わり', '崩壊', 'なくなる', '危機'
  ],
  '🛡️ AI時代の生存戦略・総論': [
    '生き残る', 'サバイバル', '生存', '戦略', '対策', '備え',
    '防衛', '保身', '守る', '適応', '変化', '進化',
    '競争', '差別化', '優位性', '選ばれる', '勝つ'
  ],
  '💼 ハイクラス転職・キャリア戦略': [
    '転職', 'ハイクラス', '年収1000万', '年収', 'エージェント',
    '求人', 'スカウト', '管理職', 'CXO', '外資',
    'コンサル', '昇進', 'ポジション', 'キャリアアップ', '市場価値'
  ],
  '📖 ストーリーテリング・ドキュメンタリー思考': [
    'ストーリー', '物語', 'ドキュメンタリー', 'モノローグ', '告白',
    '深夜', '私は', '私が', '体験', '経験', '実録',
    '記録', '証言', '目撃', '現場', 'リアル'
  ],
  '🤖 AIと人間の本質・アイデンティティ': [
    '人間', '人間性', '人間らしさ', 'アイデンティティ', '自分',
    '感情', '創造性', '独自性', '個性', '価値',
    '尊厳', '意味', '存在', '生きる', '哲学'
  ],
  '💰 AI時代のお金・財布・経済格差': [
    '財布', 'お金', '経済', '格差', '貧富',
    '投資', '資産', '収入', '株価', '市場',
    'ビジネス', '稼ぐ', '儲ける', '富', 'マネー'
  ],
  '🎯 AIを武器にするスキル・思考法': [
    'プロンプト', 'AI活用', '使いこなす', 'スキル', 'テクニック',
    '思考法', 'マインドセット', '方法', 'コツ', '実践',
    'ツール', 'ChatGPT', '生成AI', 'エンジニア', '技術'
  ],
  '🏢 組織・会社との付き合い方': [
    '組織', '会社', '企業', '職場', '上司',
    '人事', '評価', '制度', '文化', '環境',
    'マネジメント', 'リーダーシップ', 'チーム', '関係'
  ],
  '🎨 クリエイティブ・表現者の生存': [
    'クリエイティブ', '表現', 'アート', 'デザイン', '創作',
    'クリエイター', 'アーティスト', 'デザイナー', 'ライター',
    '作品', '芸術', '美', '感性', 'オリジナリティ'
  ],
  '⚔️ AI・国家・軍事・倫理': [
    '国家', '政府', '軍事', '防衛', '安全保障',
    '地政学', '外交', '規制', '法律', '倫理',
    'リスク管理', 'セキュリティ', 'プライバシー', '透明性', 'ガバナンス'
  ],
  '🧭 キャリア・ポートフォリオ設計': [
    'キャリア', 'ポートフォリオ', '複業', '副業', 'フリーランス',
    '独立', '起業', 'キャリアパス', 'キャリアデザイン', '人生設計',
    'ライフプラン', '選択', '決断', '道', '未来'
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
  let selectedCategory = '🌊 AI時代の本質と世界観'; // デフォルト

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
