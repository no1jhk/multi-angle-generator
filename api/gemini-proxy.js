// Vercel Serverless Function — Gemini API Proxy for Veo video generation
// Bypasses CORS restrictions that prevent browser-direct calls to predictLongRunning

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-goog-api-key");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    // Extract the path after /api/gemini-proxy
    // e.g., /api/gemini-proxy/models/veo-3.1:predictLongRunning → /v1beta/models/veo-3.1:predictLongRunning
    const { path } = req.query;
    if (!path || path.length === 0) {
      return res.status(400).json({ error: "Missing path parameter" });
    }

    const geminiPath = Array.isArray(path) ? path.join("/") : path;
    const targetUrl = `https://generativelanguage.googleapis.com/v1beta/${geminiPath}`;

    // Forward the API key from header
    const apiKey = req.headers["x-goog-api-key"];
    if (!apiKey) {
      return res.status(401).json({ error: "Missing API key" });
    }

    const headers = {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    };

    const fetchOptions = {
      method: req.method,
      headers,
    };

    // Forward body for POST requests
    if (req.method === "POST" && req.body) {
      fetchOptions.body = JSON.stringify(req.body);
    }

    const response = await fetch(targetUrl, fetchOptions);

    // Check if the response is a video binary (for downloading generated videos)
    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("video/") || contentType.includes("application/octet-stream")) {
      // Stream binary video data
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

// Vercel config: increase timeout for long-running video generation polling
export const config = {
  maxDuration: 30, // 30 seconds (Vercel hobby plan max)
};
