function parseDateString(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;

    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateStr;
  }
}

export function parseMarkdownToHtml(text: string): string {
  let html = text;

  const articleMetadata = new Map<string, { englishTitle: string; url: string }>();

  html = html.replace(/###\s*\[【事実:\s*(.+?)（(.+?)／(.+?)）】\]\(([^)]+)\)/g, (match, japaneseTitle, englishTitle, date, url) => {
    const key = japaneseTitle.trim();
    articleMetadata.set(key, {
      englishTitle: englishTitle.trim(),
      url: url.trim()
    });

    return `<div class="mb-6 mt-8" data-article-title="${key}">
      <h3 class="text-2xl font-bold mb-2 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">【事実: ${japaneseTitle.trim()}（${date.trim()}）】</h3>
    </div>`;
  });

  html = html.replace(/-\s*\*\*配信日\*\*:\s*(.+)/g, (match, dateStr) => {
    const formattedDate = parseDateString(dateStr.trim());
    return `<div class="mb-3"><strong>配信日:</strong> ${formattedDate}</div>`;
  });

  html = html.replace(/-\s*\*\*事実概要\*\*:\s*(.+)/g, '<div class="mb-3"><strong>事実概要:</strong> $1</div>');
  html = html.replace(/-\s*\*\*編集長の眼:\*\*\s*(.+)/g, '<div class="mb-3"><strong>編集長の眼:</strong> $1</div>');

  html = html.replace(/※末尾に\s*\[引用元[：:]\s*([^\]]+)\]\(([^)]+)\)/g, (match, mediaName, url) => {
    let replacementHtml = `<div class="mt-4 text-sm text-muted-foreground">`;

    let matched = false;
    const entries = Array.from(articleMetadata.entries());
    for (const [key, metadata] of entries) {
      const articleSection = html.split(`data-article-title="${key}"`)[1];
      if (articleSection && articleSection.indexOf(match) !== -1) {
        replacementHtml += `<a href="${metadata.url}" target="_blank" rel="noopener noreferrer" class="text-neon-cyan hover:text-neon-blue underline transition-colors font-bold">引用元: ${metadata.englishTitle}</a>`;
        matched = true;
        break;
      }
    }

    if (!matched) {
      replacementHtml += `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-neon-cyan hover:text-neon-blue underline transition-colors font-bold">引用元: ${mediaName}</a>`;
    }

    replacementHtml += `</div>`;
    return replacementHtml;
  });

  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-neon-cyan hover:text-neon-blue underline transition-colors">$1</a>');

  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // 修正: 見出しにグラデーションカラーを適用（text-foreground から neon グラデーションへ）
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-3xl font-bold mt-10 mb-5 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">$1</h2>');

  html = html.replace(/^- (.+)$/gm, '<li class="ml-6 list-disc mb-2">$1</li>');

  html = html.replace(/\n\n/g, '</p><p class="mb-4">');
  html = `<p class="mb-4">${html}</p>`;

  return html;
}
