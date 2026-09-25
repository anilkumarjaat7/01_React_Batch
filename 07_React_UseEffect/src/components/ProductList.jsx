import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setproducts(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
