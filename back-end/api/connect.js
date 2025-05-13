import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://rafael_kanda:mUn1ver$3@cluster0.nv19wnh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify_clone");
