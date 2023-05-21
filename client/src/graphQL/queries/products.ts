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
  query GetProductsByIds($ids: [Int!]!) {
    productsByIds(ids: $ids) {
      id
      name
      description
      price
      image
      quantity
    }
  }
`;
