import gql from "graphql-tag";
import client from "../../app/api";
import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
} from "../../graphQL/queries/products";

export default function Cart() {
  //   const { data } = client.cache.read({ query: GET_PRODUCTS });
  const products = client.readQuery({
    query: GET_PRODUCTS,
    // Provide any required variables in this object.
    // Variables of mismatched types will return `null`.
    variables: {
      id: 1,
    },
  });
  console.log("data: ", products);

  return <div>Cart</div>;
}
