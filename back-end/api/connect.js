import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import path from "path";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: path.resolve("./back-end/.env") });
}

const { DB_URI } = process.env.DB_URI;

console.log(`DB_URI: ${DB_URI}`);

const client = new MongoClient(DB_URI);

export const db = client.db("spotify_clone");
