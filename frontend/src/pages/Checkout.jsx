import { useEffect } from "react";
import useItemsStore from "../store/useItemStore";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Navbar from "../components/Navbar";

const Checkout = () => {
  const { cartItems, loadFromStorage, removeFromCart } = useItemsStore();

  useEffect(() => {
    loadFromStorage();
  }, []);

  // calculate total price
  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="grid gap-4 max-w-2xl mx-auto">
            {cartItems.map((item) => (
              <Card key={item.id} className="flex flex-row items-center justify-between gap-4 p-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex flex-col justify-between items-end gap-2">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                  <Button
                    variant="destructive"
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center gap-2 text-black w-32"
                  >
                    <Trash2 className="w-4 h-4 mr-2" /> Remove
                  </Button>
                </div>
              </Card>
            ))}

            <div className="text-right mt-4 text-lg font-bold">
              Total: ${total}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
