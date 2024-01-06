import { Product } from "./Product";

export const ProductFeed = ({ products }) => {
  console.log({ products });
  return (
    <div className="relative">
      <div className="flex flex-grow justify-center items-center flex-wrap">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
