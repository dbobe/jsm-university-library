import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./src/database/schema.ts",
  dialect: "postgresql",
  out: "./src/database/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
