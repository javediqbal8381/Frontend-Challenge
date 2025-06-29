import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Discover & Sell <br />
              <span className="text-blue-600">Quality Products</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Explore curated items, add your own, or quickly checkout — all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                Browse Products
              </Link>
              <Link
                to="/add-item"
                className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition"
              >
                Add Item
              </Link>
              <Link
                to="/checkout"
                className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition"
              >
                Checkout
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src="/images/bed.jpg"
              alt="Product showcase"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
