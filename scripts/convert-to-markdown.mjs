import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogPostsPath = path.join(__dirname, '../src/lib/blog-posts.ts');
const outputDir = path.join(__dirname, '../src/content/blog');

const fileContent = fs.readFileSync(blogPostsPath, 'utf-8');

const blogPostsMatch = fileContent.match(/export const BLOG_POSTS: BlogPost\[\] = \[([\s\S]*?)\];/);
if (!blogPostsMatch) {
  console.error('Could not find BLOG_POSTS array');
  process.exit(1);
}

const postsArrayString = '[' + blogPostsMatch[1] + ']';

const postsString = postsArrayString
  .replace(/^\[/, '')
  .replace(/\]$/, '');

const posts = [];
let currentPost = null;
let braceDepth = 0;
let currentObject = '';

for (let i = 0; i < postsString.length; i++) {
  const char = postsString[i];

  if (char === '{') {
    braceDepth++;
    if (braceDepth === 1) {
      currentObject = '{';
      continue;
    }
  }

  if (braceDepth > 0) {
    currentObject += char;
  }

  if (char === '}') {
    braceDepth--;
    if (braceDepth === 0) {
      try {
        const postData = parsePostObject(currentObject);
        if (postData) {
          posts.push(postData);
        }
      } catch (e) {
        console.error('Error parsing post:', e.message);
      }
      currentObject = '';
    }
  }
}

function parsePostObject(objString) {
  const slug = extractField(objString, 'slug');
  const title = extractField(objString, 'title');
  const lead = extractField(objString, 'lead');
  const date = extractField(objString, 'date');
  const readTime = extractField(objString, 'readTime');
  const category = extractField(objString, 'category');

  const contentMatch = objString.match(/content:\s*\[([\s\S]*?)\](?:,\s*affiliates|\s*})/);
  const content = [];

  if (contentMatch) {
    const contentString = contentMatch[1];
    const sections = extractSections(contentString);
    content.push(...sections);
  }

  const affiliatesMatch = objString.match(/affiliates:\s*\[([\s\S]*?)\](?:\s*})/);
  const affiliates = [];

  if (affiliatesMatch) {
    const affiliatesString = affiliatesMatch[1];
    const affiliateObjects = extractAffiliates(affiliatesString);
    affiliates.push(...affiliateObjects);
  }

  return {
    slug,
    title,
    lead,
    date,
    readTime,
    category,
    content,
    affiliates: affiliates.length > 0 ? affiliates : undefined
  };
}

function extractField(objString, fieldName) {
  const regex = new RegExp(`${fieldName}:\\s*'([^']*(?:\\\\'[^']*)*)'`, 's');
  const match = objString.match(regex);
  return match ? match[1].replace(/\\'/g, "'") : '';
}

function extractSections(contentString) {
  const sections = [];
  let depth = 0;
  let currentSection = '';

  for (let i = 0; i < contentString.length; i++) {
    const char = contentString[i];

    if (char === '{') {
      depth++;
      if (depth === 1) {
        currentSection = '';
        continue;
      }
    }

    if (depth > 0) {
      currentSection += char;
    }

    if (char === '}') {
      depth--;
      if (depth === 0) {
        const section = extractField(currentSection, 'section');
        const text = extractField(currentSection, 'text');
        if (section || text) {
          sections.push({ section, text });
        }
        currentSection = '';
      }
    }
  }

  return sections;
}

function extractAffiliates(affiliatesString) {
  const affiliates = [];
  let depth = 0;
  let currentAffiliate = '';

  for (let i = 0; i < affiliatesString.length; i++) {
    const char = affiliatesString[i];

    if (char === '{') {
      depth++;
      if (depth === 1) {
        currentAffiliate = '';
        continue;
      }
    }

    if (depth > 0) {
      currentAffiliate += char;
    }

    if (char === '}') {
      depth--;
      if (depth === 0) {
        const title = extractField(currentAffiliate, 'title');
        const description = extractField(currentAffiliate, 'description');
        const url = extractField(currentAffiliate, 'url');
        const label = extractField(currentAffiliate, 'label');
        const positionMatch = currentAffiliate.match(/position:\s*(\d+)/);
        const position = positionMatch ? parseInt(positionMatch[1]) : 0;

        if (title || url) {
          affiliates.push({ title, description, url, label, position });
        }
        currentAffiliate = '';
      }
    }
  }

  return affiliates;
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

posts.forEach(post => {
  if (!post.slug) return;

  let markdown = '---\n';
  markdown += `title: "${post.title.replace(/"/g, '\\"')}"\n`;
  markdown += `lead: "${post.lead.replace(/"/g, '\\"')}"\n`;
  markdown += `date: "${post.date}"\n`;
  markdown += `readTime: "${post.readTime}"\n`;
  markdown += `category: "${post.category}"\n`;

  if (post.affiliates && post.affiliates.length > 0) {
    markdown += 'affiliates:\n';
    post.affiliates.forEach(aff => {
      markdown += `  - title: "${aff.title.replace(/"/g, '\\"')}"\n`;
      markdown += `    description: "${aff.description.replace(/"/g, '\\"')}"\n`;
      markdown += `    url: "${aff.url}"\n`;
      markdown += `    label: "${aff.label}"\n`;
      markdown += `    position: ${aff.position}\n`;
    });
  }

  markdown += '---\n\n';

  post.content.forEach(section => {
    markdown += `## ${section.section}\n\n`;
    markdown += `${section.text}\n\n`;
  });

  const filename = `${post.slug}.md`;
  const filepath = path.join(outputDir, filename);

  fs.writeFileSync(filepath, markdown, 'utf-8');
  console.log(`Created: ${filename}`);
});

console.log(`\nSuccessfully converted ${posts.length} blog posts to Markdown files!`);
