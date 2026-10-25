export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['GPTBot', 'PerplexityBot', 'Google-Extended', 'ClaudeBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.investrow.in/sitemap.xml',
  };
}
