import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDirectory = path.join(__dirname, '../src/content/jobs');
const outputFile = path.join(__dirname, '../src/lib/job-posts-data.json');

function getAllJobFiles() {
    if (!fs.existsSync(contentDirectory)) {
        console.log('Jobs directory does not exist, creating empty data file');
        return [];
    }

    const files = fs.readdirSync(contentDirectory);
    const posts = [];

    for (const filename of files) {
        if (!filename.endsWith('.md')) continue;

        const filepath = path.join(contentDirectory, filename);
        const fileContent = fs.readFileSync(filepath, 'utf-8');
        const { data } = matter(fileContent);

        const slug = filename.replace('.md', '');

        posts.push({
            slug,
            title: data.title || '',
            lead: data.lead || '',
            date: data.date || '',
            category: data.category || '',
            content: data.content || []
        });
    }

    return posts;
}

const posts = getAllJobFiles();

fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2), 'utf-8');

console.log(`Generated job data JSON with ${posts.length} posts`);
console.log(`Output: ${outputFile}`);
