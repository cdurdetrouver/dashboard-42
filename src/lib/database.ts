require("dotenv").config();
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.mdbuser}:${process.env.mdbmdp}@bot-42.qxgaebq.mongodb.net/?retryWrites=true&w=majority`;

export const clientdb = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
