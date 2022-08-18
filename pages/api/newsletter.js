import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    const data = req.body;
    const { email } = data;

    const client = await MongoClient.connect(
        'mongodb+srv://admin:admin@cluster0.5lfaf.mongodb.net/loans?retryWrites=true&w=majority'
    );
    const db = client.db();

    const collection = db.collection('newsletter');

    const result = await collection.insertOne({
        email,
    });

    client.close();

    res.status(201).json({ message: `Pomyślnie dodano do Newsletter'a!` });
};

export default handler;