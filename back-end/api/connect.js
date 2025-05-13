import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const { DB_URI } = dotenv.config().parsed ?? process.env;

console.log(`Conexão: ${DB_URI}`);

const client = new MongoClient(DB_URI);

export const db = client.db("spotify_clone");
