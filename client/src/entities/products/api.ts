import axios from "axios";

export function fetchProducts() {
  return axios.post("http://localhost:4000/graphql", {
    query: `
      query Products {
        products {
          id
          name
          description
          price
          image
          quantity
        }
      }
    `,
  });
}
