import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import useItemsStore from "../store/useItemStore";


const addToCart = (item) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
};

const Item = () => {
    const { items, fetchItems } = useItemsStore()
  const [products, setProducts] = useState([]);




  useEffect(() => {
    fetchItems();
    setProducts(items);
  }, [])
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 px-6 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Shop Products</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map((item) => (
            <div key={item.id} className="border rounded-2xl shadow-sm bg-white p-4 flex flex-col items-center">
              <img src={item.img} alt={item.name} className="w-32 h-32 object-cover mb-4 rounded-xl" />
              <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
              <p className="text-gray-500 mb-3">${item.price}</p>
              <Button onClick={() => addToCart(item)} className="gap-2 text-black shadow-md hover:bg-gray-100">
                <ShoppingCart size={16} />
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Item;
