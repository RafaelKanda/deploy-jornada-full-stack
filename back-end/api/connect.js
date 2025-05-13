import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import path from "path";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: path.resolve("./back-end/.env") });
}

console.log("DB_URI:", process.env.DB_URI);

const { DB_URI } = dotenv.config().parsed ?? process.env;

console.log(`Conexão: ${DB_URI}`);

const client = new MongoClient(DB_URI);

export const db = client.db("spotify_clone");
