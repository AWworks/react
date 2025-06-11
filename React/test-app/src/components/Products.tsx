import { useEffect, useState } from "react";
// import './Products.css'

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data: Product[] = await response.json();
    setProducts(data);
  };

  return (
    <div>
      <h1 className="text-danger fw-bold">Our Products</h1>
      <div className="row g-3">
        {products.map((product) => (
          <div className="col-md-4 ">
            <div className="card vh-50" key={product.id}>
              <img src={product.image} className="card-img-top  object-fit-contain pt-2" alt="..." />
              <div className="card-body flex-grow-1">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="text-info">Price: {product.price}</h6>
              </div>
            </div>
          </div>

        ))}
      </div>


    </div>
  );
};
export default Products;