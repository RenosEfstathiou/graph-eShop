import { CustomerTypeDef } from "./graphQL/Customer";
import { ProductTypeDef } from "./graphQL/Product";
import { TokenTypeDef } from "./graphQL/Token";
import { UserTypeDef } from "./graphQL/User";

export const schema = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
    
  ${UserTypeDef}
    ${CustomerTypeDef}
    ${ProductTypeDef}
    ${TokenTypeDef}

  type Order {
    id: Int!
    customerId: Int!
    orderDate: String!
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
    users:[User]
    token:Token
    products: [Product]
    productById(id: Int!): Product
    productsByIds(ids: [Int!]!): [Product!]!
  }


  type Mutation {

    register(name: String!, email: String!, password: String!): User
    
    loginWithEmail(email: String!, password: String): Token

    addCustomer(
        password:String!
        name: String!
        email: String!
        phone: String!
        address: String!
    ): Customer

      addProduct(
      name: String!
      description: String!
      price: Float!
      image: String!
      quantity: Int!
    ): Product

    deleteCustomer(
      id: Int!
    ):Customer

    patchCustomer(
        id: Int!
        email: String!
        phone: String!
        address: String!
        name: String!
    ): Customer
  }
`;
