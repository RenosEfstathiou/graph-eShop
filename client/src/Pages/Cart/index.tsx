import {
  GET_PRODUCTS_BY_IDS,
  GET_PRODUCT_BY_ID,
} from "../../graphQL/queries/products";
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

  const { data: d } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      id: 1,
    },
  });

  return <div>Cart</div>;
}
