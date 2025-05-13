import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });
console.log("DB_URI:", process.env.DB_URI);

const client = new MongoClient(process.env.DB_URI);

export const db = client.db("spotify_clone");
