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

  // TODO: Finish styling this component ~1:30:00
  return (
    <div className="relative flex flex-col w-64 h-96 m-5 p-6 bg-white text-sm">
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
      <p>{title}</p>
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
      <div>
        <Currency quantity={price} />
      </div>
      {isEligibleForPrime && (
        <div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png"
            width={70}
            height={35}
            className="opacity-90"
          />
          <p>FREE 2-Day Delivery</p>
        </div>
      )}
      {/* <p className="">{description}</p> */}
    </div>
  );
};
