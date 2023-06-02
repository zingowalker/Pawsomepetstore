import { Product } from "@/models/product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handler(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "GET") {
    res.json(await Product.find());
  }

  if (method === "POST") {
    const { title, price, description } = req.body;
    const productDoc = await Product.create({
      title,
      price,
      description,
    });
    res.json(productDoc);
  }
}