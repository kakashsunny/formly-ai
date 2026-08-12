// DNS fix MUST be the very first thing that runs — before any other import,
// since a fresh DNS lookup can happen the moment config/db.js or app.js
// pulls in anything that touches the pg pool.
import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";

async function start() {
  await connectDB();
  app.listen(env.port, () => {
    console.log(`Server running in ${env.nodeEnv} mode on http://localhost:${env.port}`);
  });
}

start();

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});