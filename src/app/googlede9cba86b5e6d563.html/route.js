export async function GET() {
  return new Response('google-site-verification: googlede9cba86b5e6d563.html\n', {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
