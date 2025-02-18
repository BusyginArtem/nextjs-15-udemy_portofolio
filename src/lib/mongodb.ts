import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

const options = {};

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

async function connectMongoDb() {
  const client = new MongoClient(uri!, options);
  return client.connect();
}

export default connectMongoDb;
