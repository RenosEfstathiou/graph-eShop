export const ProductTypeDef = `
  type Product {
    id: Int!
    name: String!
    description: String!
    price: Float!
    image: String!
    quantity: Int!
    orderItems: [OrderItem!]!
  }
`;
