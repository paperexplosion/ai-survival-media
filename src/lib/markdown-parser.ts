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

  // ---- ブロック要素（表・番号つきリスト・区切り線）。後段の \n\n 段落化で壊れないよう、1行のHTMLにして前後を空行で囲む ----
  // 表：`| a | b |` の連続行 → <table>（スマホでは横スクロール）
  html = html.replace(/(^[ \t]*\|.*\|[ \t]*(?:\n|$))+/gm, (block) => {
    const rows = block
      .trim()
      .split("\n")
      .map((line) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim()));
    const isSeparator = (cells: string[]) => cells.every((c) => /^:?-{2,}:?$/.test(c));
    const dataRows = rows.filter((cells) => !isSeparator(cells));
    if (dataRows.length === 0) return block;
    const [head, ...body] = dataRows;
    const th = head.map((c) => `<th class="border border-white/20 bg-white/10 px-3 py-2 text-left font-bold text-neon-cyan whitespace-nowrap">${c}</th>`).join("");
    const trs = body
      .map((cells) => `<tr>${cells.map((c) => `<td class="border border-white/15 px-3 py-2 align-top">${c}</td>`).join("")}</tr>`)
      .join("");
    return `<div class="my-6 overflow-x-auto"><table class="w-full min-w-[480px] border-collapse text-sm"><thead><tr>${th}</tr></thead><tbody>${trs}</tbody></table></div>\n`;
  });

  // 番号つきリスト：`1. xxx` の連続行 → <ol>
  html = html.replace(/(^\d+\.[ \t]+.*(?:\n|$))+/gm, (block) => {
    const items = block
      .trim()
      .split("\n")
      .map((line) => line.replace(/^\d+\.[ \t]+/, "").trim());
    return `<ol class="list-decimal ml-6 my-4 space-y-2">${items.map((i) => `<li>${i}</li>`).join("")}</ol>\n`;
  });

  // 区切り線：`---` だけの行
  html = html.replace(/^---$/gm, '<hr class="my-8 border-white/20" />');

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

  // 画像タグを先に変換（リンク変換より前に処理する必要がある）
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="w-full rounded-lg my-4" loading="lazy" />');

  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-neon-cyan hover:text-neon-blue underline transition-colors">$1</a>');

  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // H3 (###): text-xl（section.section H2の text-2xl より小さく）
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mt-6 mb-3 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">$1</h3>');
  // H2 (##): text-3xl（最大）
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-3xl font-bold mt-10 mb-5 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">$1</h2>');

  html = html.replace(/^- (.+)$/gm, '<li class="ml-6 list-disc mb-2">$1</li>');

  html = html.replace(/\n\n/g, '</p><p class="mb-4">');
  html = `<p class="mb-4">${html}</p>`;

  return html;
}
