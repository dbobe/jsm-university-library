import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import config from "@/lib/config";

// For serverless/edge environments
const sql = neon(config.env.databaseUrl);
export const db = drizzle({ client: sql, casing: "snake_case" });
