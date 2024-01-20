import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Search } from "./Search";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/cartSlice";

export function Top() {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const greeting = session?.user?.name ? `Hi ${session.user.name}` : "Sign In";

  const homeLink = "/";
  const checkoutLink = "/checkout";
  const handleClickGreeting = session ? signOut : signIn;
  return (
    <div className="w-full flex items-center justify-between px-1 py-2 bg-amazon_blue flex-grow space-x-3">
      {/* Logo */}
      <Link href={homeLink}>
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 pl-2">
          <Image
            src="https://links.papareact.com/f90"
            width={90}
            height={40}
            alt="Amazon Logo"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </Link>

      {/* Search */}
      <Search />

      {/* Right Column */}
      <div className="flex flex-grow justify-between p-1 items-center text-white text-xs pr-2">
        <div className="link" onClick={handleClickGreeting}>
          <p>{greeting}</p>
          {!!session && <p className="text-gray-300">Sign Out</p>}
        </div>

        <div className="link">
          <p>Returns</p>
          <p className="Header-text">& Orders</p>
        </div>

        <Link href={checkoutLink}>
          <div className="flex items-center link">
            <div className="relative">
              <ShoppingCartIcon className="w-8 h-8" />
              <span className="badge bg-yellow-200">{items?.length ?? ""}</span>
            </div>
            <p className="Header-text hidden md:inline">Cart</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
