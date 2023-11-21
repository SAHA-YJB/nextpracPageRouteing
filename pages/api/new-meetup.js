//리액트 코드 x
//서버사이드 코드 o
// api/new-meetup
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  //몽고디비에 데이터 저장하기
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
