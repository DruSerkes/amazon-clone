import React from "react";
import { Header } from "../components/Header/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";
import CheckoutProduct from "../components/Product/CheckoutProduct/CheckoutProduct";
import { useSession } from "next-auth/react";

export default function Checkout() {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const isEmpty = items.length === 0;
  const canCheckout = isEmpty || !session;
  const buttonClasses = `product-button mt-2 ${
    canCheckout && "button-disabled"
  }`;
  const subTotal = items.reduce((acc, item) => acc + item.price, 0);
  const buttonText = !session ? "Sign In to Checkout" : "Proceed to Checkout";

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="sm:flex max-w-screen-xl mx-auto">
        {/* Main */}
        <div className="w-[80%] shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10">
            <h1 className="text-3xl border-b pb-4">Your Shopping Cart</h1>
            <div>
              {isEmpty ? (
                <p>Your Cart is Empty!</p>
              ) : (
                <div className="bg-white rounded">
                  {items.map((item) => (
                    <CheckoutProduct key={item.id} {...item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="w-[20%] bg-white py-5 px-3">
          <h2 className="whitespace-nowrap">
            Subtotal ({items.length} items):{" "}
            <span className="font-bold">${subTotal}</span>
          </h2>
          <button disabled={canCheckout} className={buttonClasses}>
            {buttonText}
          </button>
        </div>
      </main>
    </div>
  );
}
