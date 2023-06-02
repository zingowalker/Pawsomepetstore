import Layout from "@/components/Layout";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  async function createProduct(ev) {
    ev.preventDefault();

    const data = { title, price, description };
    axios.post("/api/products", data);
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push("/products");
  }
  return (
    <Layout>
      <form onSubmit={createProduct}>
        <div className="m-4">
          <h1>Add New Product</h1>
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Price (in INR)</label>
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label>Description</label>
          <textarea
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
    </Layout>
  );
}
