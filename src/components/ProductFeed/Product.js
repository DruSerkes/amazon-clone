import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Currency from "react-currency-formatter";

export const Product = ({
  id,
  title,
  category,
  description,
  image,
  price,
  rating,
}) => {
  const stars = new Array(Math.floor(rating.rate)).fill();
  const isEligibleForPrime = Math.random() < 0.5;

  return (
    <div className="relative flex flex-col m-5 mt-0 p-6 bg-white text-sm">
      <p className="absolute top-2 right-2 text-xs italic text-gray-500 mb-6">
        {category}
      </p>
      <div>
        <Image
          loading="lazy"
          src={image}
          alt={title}
          height={200}
          width={200}
          objectFit="contain"
        />
      </div>
      <p className="my-3 font-bold">{title}</p>
      <p className="flex">
        {stars.map((_, i) => (
          <StarIcon
            key={`${title}-${i}`}
            className="w-5 h-5"
            fill="gold"
            color="gold"
          />
        ))}
      </p>
      <div className="my-3 text-xs line-clamp-2">{description}</div>
      <div className="mb-3">
        <Currency quantity={price} />
      </div>
      {isEligibleForPrime && (
        <div className="flex items-center space-x-2 mb-3">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png"
            width={40}
            height={25}
            className="opacity-90"
          />
          <p className="text-gray text-xs">FREE 2-Day Delivery</p>
        </div>
      )}
      <button className="mt-auto product-button">Add to Cart</button>
    </div>
  );
};
