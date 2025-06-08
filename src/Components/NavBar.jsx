import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">🛍️ Infopulse Shop</h1>
        <div className="flex items-center gap-2 text-lg relative group cursor-pointer">
          <FaShoppingCart className="text-2xl" />
          <span className="font-semibold transition-transform duration-200 group-hover:scale-110">
            {totalItems}
          </span>
          <span className="ml-1 hidden sm:inline">items</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
