import Image from "next/image";
import React from "react";
import ProductDetails from "../ProductDetails";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../slices/cartSlice";

function CheckoutProduct({
  id,
  title,
  description,
  image,
  price,
  rating,
  isEligibleForPrime,
}) {
  const dispatch = useDispatch();
  const handleClickRemove = () => {
    dispatch(removeFromCart({ id }));
  };
  return (
    <div className="flex p-4 border-b">
      <div className="w-[20%]">
        <Image
          loading="lazy"
          src={image}
          alt={title}
          height={200}
          width={200}
          objectFit="contain"
        />
      </div>

      <div className="w-[60%]">
        <ProductDetails
          title={title}
          description={description}
          price={price}
          rating={rating}
          isEligibleForPrime={isEligibleForPrime}
        />
      </div>

      <div className="w-[20%]" onClick={handleClickRemove}>
        <button className="product-button">Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
