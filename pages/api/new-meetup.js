import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method !== "POST") return;

  const data = req.body;
  console.log("Data: ", data);

  const uri = `mongodb+srv://${process.env.NAME}:${process.env.DB_PASS}@cluster0.tqc39.mongodb.net/meetups?retryWrites=true&w=majority`;

  try {
    const client = await MongoClient.connect(uri);

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup added!" });
  } catch (error) {
    console.log(error.message);
    console.log(error);
  }
};

export default handler;

// const { MongoClient } = require('mongodb');
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
