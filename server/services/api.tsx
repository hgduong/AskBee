import { MongoClient } from 'mongodb';

const uri = 'your-connection-string';
const client = new MongoClient(uri);

export async function connectToMongo() {
    try {
        await client.connect();
        const db = client.db('myDatabase');
        return db.collection('users');
    } catch (error) {
        console.error('Kết nối thất bại:', error);
        throw error;
    }
}