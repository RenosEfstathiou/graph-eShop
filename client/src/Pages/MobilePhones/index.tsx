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
      <div className="gap-6 p-2 md:gap-4 grid md:grid-cols-6  ">
        {data.products.map((p: Product) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </>
  );
}
