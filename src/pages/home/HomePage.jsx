import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <link
        rel="icon"
        type="image/png"
        href="../public/images/home-favicon.png"
      />

      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
