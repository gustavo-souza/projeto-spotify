// Javascript assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://guhhsouza:Nd7s4l278eerkJrN@cluster0.qhulu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
