import { Bars4Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const Bottom = () => (
  <div className="w-full bg-amazon_blue-light text-white text-xs p-2 flex flex-grow items-center space-x-3">
    <Link href="/">
      <p className="flex items-center link space-x-1">
        <Bars4Icon className="w-4 h-6" />
        <span>All</span>
      </p>
    </Link>
    <Link href="/">
      <p className="link">Prime Video</p>
    </Link>
    <Link href="/">
      <p className="link">Amazon Business</p>
    </Link>
    <Link href="/">
      <p className="link">Today's Deals</p>
    </Link>
    <Link href="/">
      <p className="link hidden lg:inline-flex">Electronics</p>
    </Link>
    <Link href="/">
      <p className="link hidden lg:inline-flex">Food & Grocery</p>
    </Link>
    <Link href="/">
      <p className="link hidden lg:inline-flex">Buy Again</p>
    </Link>
    <Link href="/">
      <p className="link hidden lg:inline-flex">Toolkit</p>
    </Link>
  </div>
);
