import type { APIRoute } from "astro";

const rads = `
google.com, pub-3050915388015871, DIRECT, f08c47fec0942fa0
`.trim();

export const GET: APIRoute = () =>
  new Response(rads, {
    headers: { "Content-Type": "text/plain" },
  });
