import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";
import Currency from "react-currency-formatter";
import { getStars } from "../../utils/getStars";
import PrimeHighlight from "./PrimeHighlight";

function ProductDetails({
  title,
  description,
  rating,
  price,
  isEligibleForPrime,
}) {
  const stars = getStars(rating.rate);
  return (
    <>
      <p className="my-3 font-bold">{title}</p>
      <p className="flex">
        {stars.map((id) => (
          <StarIcon key={id} className="w-5 h-5" fill="gold" color="gold" />
        ))}
      </p>
      <div className="my-3 text-xs line-clamp-2">{description}</div>
      <div className="mb-3">
        <Currency quantity={price} />
      </div>
      {isEligibleForPrime && <PrimeHighlight />}
    </>
  );
}

export default ProductDetails;
