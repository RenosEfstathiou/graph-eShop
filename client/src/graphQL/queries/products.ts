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

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: ID!) {
    products(id: $id) {
      id
      text
      completed
    }
  }
`;
