import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { ShoppingCart } from "lucide-react";
import useItemStore from "../store/useItemStore"
import { useEffect } from "react";

const Navbar = () => {
  const { cartItems, loadFromStorage } = useItemStore();

  useEffect(() => {
    // load cart items from localStorage on initial render
    loadFromStorage();
  }, []);

  return (
    <nav className="w-full flex items-center justify-between bg-white shadow-md px-8 py-6">
      <div className="navbar__logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className="flex space-x-4">
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Home
        </Link>
        <Link to="/products" className="text-blue-500 hover:text-blue-700">
          Products
        </Link>
        <Link to="/add-item" className="text-blue-500 hover:text-blue-700">
          Add Item
        </Link>
        <Link to="/checkout" className="relative inline-block text-blue-500 hover:text-blue-700">
          <ShoppingCart className="h-6 w-6" aria-label="Cart" />
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-3 h-5 min-w-5 px-1 rounded-full text-xs font-mono tabular-nums flex items-center justify-center"
          >
            {cartItems.length}
          </Badge>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;