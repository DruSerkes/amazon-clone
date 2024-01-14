import React from "react";
import { Header } from "../components/Header/Header";
import Image from "next/image";

export default function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="sm:flex max-w-screen-2xl mx-auto">
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
            <div>Cart items here</div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="w-[20%]">sidebar</div>
      </main>
    </div>
  );
}
