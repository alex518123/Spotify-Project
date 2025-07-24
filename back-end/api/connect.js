import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://estudosprogramacao448:JqfUj1fRdNqcb0GJ@cluster1.0mro6ar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");



// "mongodb+srv://fullstackjornada:qojI71xVU2aV8UKC@cluster0.v1qra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";