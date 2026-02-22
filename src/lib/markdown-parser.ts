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

  html = html.replace(/^###\s*【事実:\s*(.+?)（(.+?)／(.+?)）】\s*$/gm, (match, japaneseTitle, englishTitle, date) => {
    return `<div class="mb-6">
      <h3 class="text-2xl font-bold text-neon-cyan mb-2">${japaneseTitle.trim()}</h3>
      <div class="text-sm text-muted-foreground">${englishTitle.trim()} / ${date.trim()}</div>
    </div>`;
  });

  html = html.replace(/^-\s*\*\*配信日\*\*:\s*(.+)$/gm, (match, dateStr) => {
    const formattedDate = parseDateString(dateStr.trim());
    return `<div class="mb-3"><strong>配信日:</strong> ${formattedDate}</div>`;
  });

  html = html.replace(/^-\s*\*\*事実概要\*\*:\s*(.+)$/gm, '<div class="mb-3"><strong>事実概要:</strong> $1</div>');
  html = html.replace(/^-\s*\*\*編集長の眼\*\*:\s*(.+)$/gm, '<div class="mb-3"><strong>編集長の眼:</strong> $1</div>');

  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  html = html.replace(/\[引用元：([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-neon-cyan hover:text-neon-blue underline transition-colors font-bold">引用元: $1</a>');

  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-neon-cyan hover:text-neon-blue underline transition-colors">$1</a>');

  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-foreground mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-foreground mt-8 mb-4">$1</h2>');

  html = html.replace(/^- (.+)$/gm, '<li class="ml-6 list-disc mb-2">$1</li>');

  html = html.replace(/\n\n/g, '</p><p class="mb-4">');
  html = `<p class="mb-4">${html}</p>`;

  return html;
}
