import gql from "graphql-tag";
import { client } from "../../app/api";
import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
} from "../../graphQL/queries/products";

export default function Cart() {
  //   const { data } = client.cache.read({ query: GET_PRODUCTS });
  const { product } = client.readQuery({
    query: gql`
      query ReadProduct($id: Int!) {
        product(id: $id) {
          id
        }
      }
    `,
    variables: {
      id: 5,
    },
  });
  console.log("data: ", product);

  return <div>Cart</div>;
}
