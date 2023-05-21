export const CustomerTypeDef = `
  type Customer {
    id: Int
    password: String!
    name: String
    email: String!
    phone: String
    address: String
    orders: [Order!]
  }
`;
