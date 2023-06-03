import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DeleteProductPage() {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);

  function goBack() {
    router.push("/products");
  }

  async function deleteProduct() {
    await axios.delete("/api/products?id=" + id);
    goBack();
  }

  return (
    <Layout>
      <h1>Are you sure you want to delete &nbsp; "{productInfo?.title}"?</h1>
      <div className="flex gap-2 justify-center mt-2">
        <button className="btn-red" onClick={deleteProduct}>
          Yes
        </button>
        <button className="btn-green" onClick={goBack}>
          No
        </button>
      </div>
    </Layout>
  );
}
