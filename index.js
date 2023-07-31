const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleare

app.use(cors());
app.use(express.json());

// connection to MongoDB

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jdfs3t2.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const productCollection = client
      .db("Simple-e-commerce-with-pagination")
      .collection("products");
    app.get("/products", async (req, res) => {
      const query = {};
      const cursore = productCollection.find(query);
      const products = await cursore.toArray();
      res.send(products);
    });
  } finally {
  }
}
run().catch((e) => console.error(e));

// All API

app.get("/", (req, res) => {
  res.send("simple e-commerce server is running");
});
app.listen(port, () => {
  console.log(`simple e-commerce server is running on port: ${port}`);
});
