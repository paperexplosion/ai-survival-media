import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';
import { categorizeArticle } from './auto-categorize.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDirectory = path.join(__dirname, '../src/content/blog');

function updateAllCategories() {
  const files = fs.readdirSync(contentDirectory);
  let updatedCount = 0;

  for (const filename of files) {
    if (!filename.endsWith('.md')) continue;

    const filepath = path.join(contentDirectory, filename);
    const fileContent = fs.readFileSync(filepath, 'utf-8');
    const { data, content } = matter(fileContent);

    // 自動判定でカテゴリを決定
    const newCategory = categorizeArticle(
      data.title || '',
      content,
      data.lead || ''
    );

    // カテゴリが変わった場合のみ更新
    if (data.category !== newCategory) {
      data.category = newCategory;

      // frontmatterを再構築
      const newContent = matter.stringify(content, data);
      fs.writeFileSync(filepath, newContent, 'utf-8');

      console.log(`✓ ${filename}: "${data.category || '(なし)'}" → "${newCategory}"`);
      updatedCount++;
    }
  }

  console.log(`\n合計 ${updatedCount} 件のカテゴリを更新しました`);
}

updateAllCategories();
