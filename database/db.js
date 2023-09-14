const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);

const getCollection = async (collectionName)=>{
    try {
        await client.connect();
        const db = client.db('EPS')
        const collection = db.collection(collectionName);
        return collection
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCollection
}