// Vercel Serverless Function — Gemini API Proxy (Catch-All)
// Route: /api/gemini-proxy/models/veo-3.1:predictLongRunning
//        /api/gemini-proxy/operations/xxx
//        /api/gemini-proxy/files/xxx (video download)

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-goog-api-key");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const { path } = req.query;
    if (!path || path.length === 0) {
      return res.status(400).json({ error: "Missing path segments" });
    }

    const geminiPath = Array.isArray(path) ? path.join("/") : path;
    
    // Build target URL — preserve any query params except 'path'
    const url = new URL(`https://generativelanguage.googleapis.com/v1beta/${geminiPath}`);
    // Forward query params (except the catch-all 'path')
    for (const [key, val] of Object.entries(req.query)) {
      if (key !== "path") url.searchParams.set(key, val);
    }

    const apiKey = req.headers["x-goog-api-key"];
    if (!apiKey) {
      return res.status(401).json({ error: "Missing x-goog-api-key header" });
    }

    const headers = {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    };

    const fetchOptions = { method: req.method, headers };
    if (req.method === "POST" && req.body) {
      fetchOptions.body = JSON.stringify(req.body);
    }

    const response = await fetch(url.toString(), fetchOptions);
    const contentType = response.headers.get("content-type") || "";

    // Binary response (video files)
    if (
      contentType.includes("video/") ||
      contentType.includes("application/octet-stream")
    ) {
      const buffer = await response.arrayBuffer();
      res.setHeader("Content-Type", contentType);
      res.setHeader("Content-Length", buffer.byteLength);
      return res.status(response.status).send(Buffer.from(buffer));
    }

    // JSON response (operation status, etc.)
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    console.error("Gemini proxy error:", error);
    return res.status(500).json({ error: error.message || "Internal proxy error" });
  }
}

export const config = {
  maxDuration: 30,
};
