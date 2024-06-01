import type { APIRoute } from "astro";

const rads = `
google.com, pub-4275966535660204, DIRECT, f08c47fec0942fa0
`.trim();

export const GET: APIRoute = () =>
  new Response(rads, {
    headers: { "Content-Type": "text/plain" },
  });
