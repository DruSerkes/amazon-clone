import Image from "next/image";
import React from "react";

function PrimeHighlight() {
  return (
    <div className="flex items-center space-x-2 mb-3">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png"
        width={40}
        height={25}
        className="opacity-90"
        alt="prime logo"
      />
      <p className="text-gray text-xs">FREE 2-Day Delivery</p>
    </div>
  );
}

export default PrimeHighlight;
