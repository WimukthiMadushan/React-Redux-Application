import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 transition hover:shadow-lg"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600">
                  ${item.price} × {item.quantity} ={" "}
                  <span className="font-semibold">
                    ${item.price * item.quantity}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    dispatch({ type: "DECREMENT_ITEM", payload: item })
                  }
                  className="w-9 h-9 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full font-bold"
                >
                  −
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: item })
                  }
                  className="w-9 h-9 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold"
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item })
                  }
                  className="px-4 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
