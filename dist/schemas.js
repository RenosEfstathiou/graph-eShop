// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Customer {
    id: Int!
    name: String!
    email: String!
    phone: String!
    address: String!
    orders: [Order!]!
  }
  
  type Product {
    id: Int!
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    orderItems: [OrderItem!]!
  }
  
  type Order {
    id: Int!
    customerId: Int!
    orderDate: DateTime!
    totalAmount: Float!
    customer: Customer!
    orderItems: [OrderItem!]!
  }
  
  type OrderItem {
    id: Int!
    orderId: Int!
    productId: Int!
    quantity: Int!
    itemPrice: Float!
    order: Order!
    product: Product!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    customers: [Customer]
  }
`;
