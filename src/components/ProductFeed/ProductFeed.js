import { Product } from "./Product";

export const ProductFeed = ({ products }) => {
  console.log({ products });
  return (
    <div className="relative -mt-10 md:-mt-52 z-30">
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 xl:grid-cols-4 ">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
