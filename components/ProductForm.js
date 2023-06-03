import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductForm({
  _id,
  title: currentTitle,
  price: currentPrice,
  description: currentDescription,
}) {
  const [title, setTitle] = useState(currentTitle || "");
  const [price, setPrice] = useState(currentPrice || "");
  const [description, setDescription] = useState(currentDescription || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  async function saveProduct(ev) {
    ev.preventDefault();

    const data = { title, price, description };
    if (_id) {
      // update product
      await axios.put("/api/products", { ...data, _id });
    } else {
      // create
      axios.post("/api/products", data);
    }
    setGoToProducts(true)
  }
  if (goToProducts) {
    router.push("/products");
  }
  return (
    <form onSubmit={saveProduct}>
      <div className="m-4">
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
  );
}
