import express from 'express';
import { connectToMongo } from './services/api';

const app = express();
app.use(express.json());

app.get('/api/data', async (req, res) => {
    try {
        const collection = await connectToMongo();
        const data = await collection.find().toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send('Lỗi server');
    }
});

app.listen(3000, () => console.log('Server chạy trên port 3000'));