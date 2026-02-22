export function convertGoogleDriveUrl(url: string): string {
  if (!url) return '';

  const match = url.match(/\/file\/d\/([^/]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }

  return url;
}
