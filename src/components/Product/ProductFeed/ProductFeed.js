import { Product } from "./Product";

export const ProductFeed = ({ products }) => {
  return (
    <div className="relative -mt-10 md:-mt-52 z-30">
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 xl:grid-cols-4 ">
        {products.slice(0, 4).map((product) => (
          <Product key={product.id} {...product} />
        ))}

        <img
          src="https://links.papareact.com/dyz"
          alt="ad banner"
          className="px-5 cursor-pointer md:col-span-full"
        />

        <div className="md:col-span-2">
          {products.slice(4, 5).map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>

        {products.slice(5).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
