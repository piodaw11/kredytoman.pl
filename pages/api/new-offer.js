// import { MongoClient } from "mongodb";

// const handler = async (req, res) => {
//     const data = req.body;
//     const { title, image, rrso, oprocentowanie, prowizja, affilate_link } = data;

//     const client = await MongoClient.connect(
//         'mongodb+srv://admin:admin@cluster0.5lfaf.mongodb.net/loans?retryWrites=true&w=majority'
//     );
//     const db = client.db();

//     const collection = db.collection(data.collection);

//     const result = await collection.insertOne({
//         title,
//         image,
//         rrso,
//         oprocentowanie,
//         prowizja,
//         affilate_link,
//     });

//     client.close();

//     res.status(201).json({ message: 'Added new offer' })
// };

// export default handler;