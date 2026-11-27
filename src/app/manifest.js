export default function manifest() {
  return {
    name: 'Investrow Financial Services',
    short_name: 'Investrow',
    description: 'AMFI Registered Mutual Fund Distributor (ARN-194720) & Wealth Services in Jharkhand & Pan-India',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A1628',
    theme_color: '#008AD8',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png'
      },
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}
