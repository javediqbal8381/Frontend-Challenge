import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import useItemStore from "../store/useItemStore";
import { useEffect, useState } from "react";
import { Badge } from "../components/ui/badge";

const Navbar = () => {
  const { cartItems, loadFromStorage } = useItemStore();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          RandoStore
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            Home
          </Link>
          <Link to="/products" className="text-blue-500 hover:text-blue-700">
            Products
          </Link>
          <Link to="/add-item" className="text-blue-500 hover:text-blue-700">
            Add Item
          </Link>
          <Link to="/checkout" className="relative text-blue-500 hover:text-blue-700">
            <ShoppingCart className="h-6 w-6" />
            {
              cartItems.length > 0 && (
                <Badge
              variant="destructive"
              className="absolute -top-2 -right-3 h-5 min-w-5 px-1 rounded-full text-xs font-mono tabular-nums flex items-center justify-center"
            >
              {cartItems.length}
            </Badge>
              )
            }
          </Link>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 ">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-blue-500 hover:text-blue-700"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="block text-blue-500 hover:text-blue-700"
          >
            Products
          </Link>
          <Link
            to="/add-item"
            onClick={() => setIsOpen(false)}
            className="block text-blue-500 hover:text-blue-700"
          >
            Add Item
          </Link>
          <Link
            to="/checkout"
            onClick={() => setIsOpen(false)}
            className="relative block text-blue-500 hover:text-blue-700"
          >
            <ShoppingCart className="h-6 w-6 text-blue-500" />
            {cartItems.length > 0 && (
              <Badge
                variant="destructive"
                className=" -mt-10 ml-[16px] h-5 min-w-5 px-1 rounded-full text-xs font-mono tabular-nums flex items-center justify-center"
              >
                {cartItems.length}
              </Badge>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
