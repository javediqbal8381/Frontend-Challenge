import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import useItemsStore from "../store/useItemStore";


const Item = () => {
  const { items, fetchItems, itemsLoading, addToCart, cartItems, removeFromCart } = useItemsStore()

  // search functionility
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (items.length === 0) {
      fetchItems();
    }
  }, [])

  const handleCart = (item) => {
    if (!cartItems.some(cartItem => cartItem.id === item.id)) {
      addToCart(item);
    } else {
      removeFromCart(item.id);
    }
  }

  console.log("Cart Items:", cartItems);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 px-6 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Shop Products</h1>
        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {filteredItems.map((item) => (
            <div key={item.id} className="border rounded-2xl shadow-sm bg-white p-4 flex flex-col items-center">
              <img src={item.img} alt={item.name} className="w-32 h-32 object-cover mb-4 rounded-xl" />
              <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
              <p className="text-gray-500 mb-3">${item.price}</p>
              <Button onClick={() => handleCart(item)} className="gap-2 text-black shadow-md hover:bg-gray-100">
                <ShoppingCart size={16} />
                {!cartItems.some(cartItem => cartItem.id === item.id) ? "Add to Cart" : "Remove From Cart"}
              </Button>
            </div>
          ))}
          {
            filteredItems.length === 0 && !itemsLoading && (
              <div className="col-span-3 text-center text-gray-500">
                No items available.
              </div>
            )
          }
          {
            itemsLoading && (
              <div className="col-span-3 text-center text-gray-500">
                Loading items...
              </div>
            )
          }
        </div>
      </main>
    </div>
  );
};

export default Item;
