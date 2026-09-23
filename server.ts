import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.static(path.join(process.cwd(), 'public'), {
    maxAge: '1d',
    etag: true,
  }));

  // --- API Routes (Simulated Backend) ---
  
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Explicit SEO sitemap & robots delivery
  app.get("/sitemap.xml", (req, res) => {
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.sendFile(path.join(process.cwd(), "public", "sitemap.xml"));
  });

  app.get("/robots.txt", (req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.sendFile(path.join(process.cwd(), "public", "robots.txt"));
  });

  // Auth mock
  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      res.json({ success: true, token: "mock-jwt-token-xyz" });
    } else {
      res.status(400).json({ success: false, error: "Invalid credentials" });
    }
  });

  // Dashboard stats mock
  app.get("/api/dashboard/stats", (req, res) => {
    res.json({
      revenue: "AED 2.4M",
      projects: 24,
      tickets: 18,
      slaBreaches: 0
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, {
      maxAge: '1y',
      immutable: true,
      setHeaders: (res, filePath) => {
        if (filePath.endsWith('.html')) {
          res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
        }
      }
    }));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Nexus API Server running on port ${PORT}`);
  });
}

startServer();
