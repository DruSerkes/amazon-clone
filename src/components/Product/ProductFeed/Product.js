import Image from "next/image";
import {
  addToCart,
  removeFromCart,
  selectItems,
} from "../../../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductDetails from "../ProductDetails";

export const Product = ({
  id,
  title,
  category,
  description,
  image,
  price,
  rating,
  isEligibleForPrime,
}) => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const isInCart = items.some((item) => item.id === id);

  const handleAddToCart = () => {
    const productForCart = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      isEligibleForPrime,
    };

    dispatch(addToCart(productForCart));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id }));
  };

  const handleClick = isInCart ? handleRemoveFromCart : handleAddToCart;

  return (
    <div className="relative flex flex-col m-5 p-6 bg-white text-sm">
      <p className="absolute top-2 right-2 text-xs italic text-gray-500 mb-6">
        {category}
      </p>
      <div className="m-auto">
        <Image
          loading="lazy"
          src={image}
          alt={title}
          height={200}
          width={200}
          objectFit="contain"
        />
      </div>

      <ProductDetails
        title={title}
        description={description}
        price={price}
        rating={rating}
        isEligibleForPrime={isEligibleForPrime}
      />

      <button className="product-button" onClick={handleClick}>
        {isInCart ? "Remove" : "Add to Cart"}
      </button>
    </div>
  );
};
