import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 home_main flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Welcome to RandoStore</h1>
        <div className="space-y-4 space-x-4">
          <Link
            to="/products"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Products
          </Link>
          <Link
            to="/checkout"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Checkout
          </Link>
          <Link
            to="/add-item"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
          >
            Add New Item
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
