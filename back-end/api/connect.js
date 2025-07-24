import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://estudosprogramacao448:JqfUj1fRdNqcb0GJ@cluster1.0mro6ar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");



