export async function POST(request: Request) {
  // Browsers send CSP reports as JSON (often with content-type: application/csp-report).
  // We keep this lightweight: log to server output so Vercel captures it.
  let payload: unknown = null;

  try {
    payload = await request.json();
  } catch {
    try {
      payload = await request.text();
    } catch {
      payload = null;
    }
  }

  // Avoid throwing if payload is huge or malformed.
  console.log("CSP Report", payload);

  return new Response(null, { status: 204 });
}
