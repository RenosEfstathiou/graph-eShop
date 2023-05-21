import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      description
      price
      image
      quantity
    }
  }
`;

export const GET_PRODUCTS_BY_IDS = gql`
  query GetProductsByIds($id: [Int!]!) {
    productsByIds(id: $id) {
      id
      name
      description
      price
      image
      quantity
    }
  }
`;
