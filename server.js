// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    handle(req, res, parsedUrl).then((r) => {});
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
