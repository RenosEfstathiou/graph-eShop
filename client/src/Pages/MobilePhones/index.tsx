import { useQuery } from "@apollo/client";
import ProductCard from "./Components/ProductCard";
import { GET_PRODUCTS } from "../../graphQL/queries/products";
import { Product } from "../../model/Product";

export default function MobilePhones() {
  const { error, loading, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h3 className="mb-2">
        Results: {data?.products ? data.products.length : 0}
      </h3>
      <div className="md:gap-4 gap-2 grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 ">
        {data.products.map((p: Product) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </>
  );
}
