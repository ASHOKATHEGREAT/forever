import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 pt-5 sm:pt-14 min-h-[80vh] border-t px-4">
      {/* ----------- Left Side ------------ */}
      <div className="flex flex-col gap-4 w-full lg:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full text-sm outline-none"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full text-sm outline-none"
            type="text"
            placeholder="Last name"
          />
        </div>

        <input
          className="border border-gray-300 rounded py-2 px-4 w-full text-sm outline-none"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="border border-gray-300 rounded py-2 px-4 w-full text-sm outline-none"
          type="text"
          placeholder="Street"
        />

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full text-sm outline-none"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full text-sm outline-none"
            type="text"
            placeholder="State"
          />
        </div>

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full text-sm outline-none"
            type="number"
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 rounded py-2 px-4 w-full text-sm outline-none"
            type="text"
            placeholder="Country"
          />
        </div>

        <input
          className="border border-gray-300 rounded py-2 px-4 w-full text-sm outline-none"
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* --------- Right Side ----------- */}
      <div className="w-full lg:w-[450px]">
        <div className="mt-6">
          <CartTotal />
        </div>

        <div className="mt-10">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex flex-col gap-4 mt-4">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-3 rounded cursor-pointer"
            >
              <span
                className={`w-4 h-4 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></span>
              <img src={assets.stripe_logo} className="h-5" alt="Stripe" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-3 rounded cursor-pointer"
            >
              <span
                className={`w-4 h-4 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></span>
              <img src={assets.razorpay_logo} className="h-5" alt="Razorpay" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-3 rounded cursor-pointer"
            >
              <span
                className={`w-4 h-4 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></span>
              <span className="text-sm text-gray-600 font-medium">
                CASH ON DELIVERY
              </span>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black text-white px-16 py-3 text-sm cursor-pointer"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
