const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://sa:sa@cluster0.a0pc9kv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // Thêm dữ liệu mẫu khi khởi động
    const database = client.db("mydb");
    const collection = database.collection("data");
    const initialData = [
      { name: "Dữ liệu 1", value: 100 },
      { name: "Dữ liệu 2", value: 200 },
      { name: "Dữ liệu 3", value: 300 },
    ];
    const result = await collection.insertMany(initialData);
    console.log(
      `${result.insertedCount} tài liệu đã được thêm`,
      result.insertedIds
    );
  } catch (err) {
    console.error("Lỗi kết nối:", err);
  }
}

connectDB().catch(console.dir);

// API Endpoints
app.get("/api/data", async (req, res) => {
  const collection = client.db("mydb").collection("data");
  const datas = await collection.find().toArray();
  res.json(datas);
});

app.post("/api/data", async (req, res) => {
  const collection = client.db("mydb").collection("data");
  const newData = req.body;
  const result = await collection.insertOne(newData);
  res.json({ ...newData, _id: result.insertedId });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Máy chủ chạy trên cổng ${PORT}`));
