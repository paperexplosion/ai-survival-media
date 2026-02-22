import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDirectory = path.join(__dirname, '../src/content/blog');
const outputFile = path.join(__dirname, '../src/lib/blog-posts-data.json');

function parseMarkdownContent(markdownContent) {
    const sections = [];
    const lines = markdownContent.split('\n');

    let currentSection = '';
    let currentText = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith('## ')) {
            if (currentSection) {
                sections.push({
                    section: currentSection,
                    text: currentText.join('\n').trim()
                });
            }
            currentSection = line.replace('## ', '').trim();
            currentText = [];
        } else if (line.startsWith('### ')) {
            if (currentSection) {
                sections.push({
                    section: currentSection,
                    text: currentText.join('\n').trim()
                });
            }
            currentSection = line.replace('### ', '').trim();
            currentText = [];
        } else {
            currentText.push(line);
        }
    }

    if (currentSection) {
        sections.push({
            section: currentSection,
            text: currentText.join('\n').trim()
        });
    } else if (currentText.length > 0) {
        sections.push({
            section: '',
            text: currentText.join('\n').trim()
        });
    }

    return sections;
}

function getAllMarkdownFiles() {
    if (!fs.existsSync(contentDirectory)) {
        console.error('Content directory does not exist:', contentDirectory);
        return [];
    }

    const files = fs.readdirSync(contentDirectory);
    const posts = [];

    for (const filename of files) {
        if (!filename.endsWith('.md')) continue;

        const filepath = path.join(contentDirectory, filename);
        const fileContent = fs.readFileSync(filepath, 'utf-8');
        const { data, content } = matter(fileContent);

        const slug = filename.replace('.md', '');

        posts.push({
            slug,
            title: data.title || '',
            lead: data.lead || '',
            date: data.date || '',
            category: data.category || '',
            content: parseMarkdownContent(content),
            affiliates: data.affiliates || undefined
        });
    }

    return posts;
}

const posts = getAllMarkdownFiles();

fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2), 'utf-8');

console.log(`Generated blog data JSON with ${posts.length} posts`);
console.log(`Output: ${outputFile}`);
