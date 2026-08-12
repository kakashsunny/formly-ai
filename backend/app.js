import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { env } from "./config/env.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

import authRoutes from "./routes/auth.routes.js";
import formRoutes from "./routes/form.routes.js";
import responseRoutes from "./routes/response.routes.js";
import insightsRoutes from "./routes/insights.routes.js";
import aiRoutes from "./routes/ai.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || env.clientUrls.includes(origin)) return callback(null, true);
      return callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "API is healthy", uptime: process.uptime() });
});

app.use("/api/auth", authRoutes);
app.use("/api/forms", formRoutes);
app.use("/api", responseRoutes);
app.use("/api", insightsRoutes);
app.use("/api/ai", aiRoutes);

// ---- Serve the built frontend (single combined deployment) ----
const frontendDist = path.join(__dirname, "../frontend/ai-form-builder-ui-boilerplate-code/dist");
app.use(express.static(frontendDist));

// Any non-API route falls through to the React app (client-side routing)
app.get(/^(?!\/api).*/, (_req, res) => {
  res.sendFile(path.join(frontendDist, "index.html"));
});
// -----------------------------------------------------------------

app.use(notFound);
app.use(errorHandler);

export default app;
