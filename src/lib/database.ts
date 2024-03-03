import { mdbmdp, mdbuser } from "$lib/env";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${mdbuser}:${mdbmdp}@bot-42.qxgaebq.mongodb.net/?retryWrites=true&w=majority`;

export const clientdb = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
