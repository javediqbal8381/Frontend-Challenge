import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-white shadow-md">
      <div className="navbar__logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className="flex space-x-4">
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Home
        </Link>
        <Link to="/checkout" className="text-blue-500 hover:text-blue-700">
          Checkout
        </Link>
        <Link to="/products" className="text-blue-500 hover:text-blue-700">
          Add Item
        </Link>
        {/* cart icon */}
        <Link to="/cart" className="relative inline-block text-blue-500 hover:text-blue-700">
      <ShoppingCart className="h-6 w-6" aria-label="Cart" />

      {/* Badge */}
      <Badge
        variant="destructive"
        className="absolute -top-2 -right-3 h-5 min-w-5 px-1 rounded-full text-xs font-mono tabular-nums flex items-center justify-center"
      >
        99
      </Badge>
    </Link>
      </ul>
    </nav>
  );
}

export default Navbar;