
import type { Product } from "../types/Product";
import ProductCard from "./ProductCard";


import smartphoneImg from '../assets/smrtphone.jpg';
import matrxImg from '../assets/mtrx.jpg';
import flourImg from '../assets/wheatflr.jpg';
import headphonesImg from '../assets/hdphone.jpg';
import oilImg from '../assets/oil.jpg';
import treadmillImg from '../assets/tredmill.jpg';
import jeansImg from '../assets/jeans.jpg';
import tshirtImg from '../assets/tshirt.jpg';
import atomicHabitsImg from '../assets/bok.jpg';

// Static list of products available in the store
const productList: Product[] = [
    { id: 1, name: 'Smartphone', category: 'Electronics', price: 25990, image: smartphoneImg },
    { id: 2, name: 'Bluetooth Headphones', category: 'Electronics', price: 2990, image: headphonesImg },
    { id: 3, name: 'Wheat Flour (5kg)', category: 'Grocery', price: 350, image: flourImg },
    { id: 4, name: 'Cooking Oil (1L)', category: 'Grocery', price: 160, image: oilImg },
    { id: 5, name: 'Treadmill', category: 'Gym Items', price: 45999, image: treadmillImg },
    { id: 6, name: 'Jeans', category: 'Clothing', price: 1099, image: jeansImg },
    { id: 7, name: "Men's T-Shirt", category: 'Clothing', price: 499, image: tshirtImg },
    { id: 9, name: 'The Matrix', category: 'Books', price: 299, image: matrxImg },
    { id: 10, name: 'Atomic Habits', category: 'Books', price: 399, image: atomicHabitsImg },
];

const Products = () => {
    return (
        <div className="p-5 ">
            <h2 className="mb-4 text-center">Our Products</h2>
            <div className="row g-4">
                {productList.map((product) => (
                    <div key={product.id} className="col-12 col-md-6 col-lg-3">
                        <ProductCard
                            id={product.id}
                            name={product.name}
                            category={product.category}
                            price={product.price}
                            image={product.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;