// This file intentionally left minimal to avoid routing conflicts
// with api/gemini-proxy/[...path].js catch-all handler.
// All proxy logic is in api/gemini-proxy/[...path].js
export default function handler(req, res) {
  res.redirect(308, '/api/gemini-proxy/' + (req.query.path || ''));
}
