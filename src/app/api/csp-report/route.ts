type CspReportBody = {
  "csp-report"?: {
    "document-uri"?: string;
    referrer?: string;
    "violated-directive"?: string;
    "effective-directive"?: string;
    "original-policy"?: string;
    disposition?: string;
    "blocked-uri"?: string;
    "line-number"?: number;
    "column-number"?: number;
    "source-file"?: string;
    "status-code"?: number;
  };
};

function isExtensionUrl(value: unknown): boolean {
  if (typeof value !== "string") return false;
  return /^(chrome|moz|safari|edge)-extension:\/\//.test(value);
}

export async function POST(request: Request) {
  // Browsers send CSP reports as JSON (often with content-type: application/csp-report).
  // Keep this lightweight: log a small, structured subset to server output so Vercel captures it.

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    // Ignore non-JSON bodies.
    return new Response(null, { status: 204 });
  }

  const body = payload as CspReportBody;
  const report = body?.["csp-report"];
  if (!report) return new Response(null, { status: 204 });

  // Chrome extensions (password managers, ad blockers, etc.) can trigger CSP reports
  // that don't reflect issues in our deployed code. Filter these to keep logs useful.
  if (isExtensionUrl(report["source-file"])) {
    return new Response(null, { status: 204 });
  }

  console.log("CSP Report", {
    documentUri: report["document-uri"],
    referrer: report.referrer,
    violatedDirective: report["violated-directive"],
    effectiveDirective: report["effective-directive"],
    blockedUri: report["blocked-uri"],
    sourceFile: report["source-file"],
    lineNumber: report["line-number"],
    columnNumber: report["column-number"],
    statusCode: report["status-code"],
    disposition: report.disposition,
  });

  return new Response(null, { status: 204 });
}
