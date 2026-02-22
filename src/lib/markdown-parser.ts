export function parseMarkdownToHtml(text: string): string {
  let html = text;

  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-neon-cyan hover:text-neon-blue underline transition-colors">$1</a>');

  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-foreground mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-foreground mt-8 mb-4">$2</h2>');

  html = html.replace(/^- (.+)$/gm, '<li class="ml-6 list-disc">$1</li>');

  html = html.replace(/\n\n/g, '</p><p class="mb-4">');
  html = `<p class="mb-4">${html}</p>`;

  return html;
}
