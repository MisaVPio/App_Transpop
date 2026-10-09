export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Optional: Pass custom API endpoints here if needed
    if (url.pathname.startsWith('/api/')) {
      return new Response(
        JSON.stringify({ message: 'API active' }),
        { headers: { 'content-type': 'application/json' } }
      );
    }

    // Serves the static Quasar SPA files from dist/spa
    return env.ASSETS.fetch(request);
  }
};
