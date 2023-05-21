import { GET_PRODUCTS_BY_IDS } from "../../graphQL/queries/products";
import { useSelector } from "react-redux";
import { selectProductIds } from "../../entities/cart";
import { useQuery } from "@apollo/client";

export default function Cart() {
  const productIds = useSelector(selectProductIds);

  const { error, loading, data } = useQuery(GET_PRODUCTS_BY_IDS, {
    variables: {
      ids: productIds,
    },
  });

  console.log(data);
  return <div>Cart</div>;
}
