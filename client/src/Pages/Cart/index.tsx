import {
  GET_PRODUCTS_BY_IDS,
  GET_PRODUCT_BY_ID,
} from "../../graphQL/queries/products";
import { useSelector } from "react-redux";
import { selectCartProductIds, selectCartProducts } from "../../entities/cart";
import { useQuery } from "@apollo/client";

import { Product } from "../../model/Product";

export default function Cart() {
  const cartProductIds = useSelector(selectCartProductIds);

  const { error, loading, data } = useQuery(GET_PRODUCTS_BY_IDS, {
    variables: {
      ids: cartProductIds,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log("cartProductIds", cartProductIds);
  return (
    <div>
      <h1 className="text-3xl fon">Cart</h1>

      <div className="grid mt-5 grid-cols-12">
        <div className="col-span-6">
          <div className="flex flex-col gap-2">
            {data?.productsByIds &&
              data.productsByIds.map((product: Product) => (
                <div className="border border-primary rounded-xl p-2 overflow-hidden flex items-center justify-between">
                  <img
                    src={product.image}
                    alt={product.image}
                    className="w-20 h-20 rounded-lg"
                  />
                  <p>{product.name}</p>
                  <p>{product.description}</p>
                  <div>
                    Price:
                    {product.price}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="col-span-6"></div>
      </div>
    </div>
  );
}
