const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type Customer {
      _id: ID
      username: String
      email: String
      phone: String
      address: String
      orders: [Pizza]
    }

    type Pizza {
      _id: ID
      size: String
      crust: String
      meats: [String]
      veggies: [String]
    }

    type Order {
      _id: ID
      status: String
      createdDate: String
      pizza: [Pizza]
    }

    type Employee {
      _id: ID
      username: String
      email: String
      password: String
    }

    type Checkout {
       session: ID
    }
    
    type CustAuth {
      token: ID
      customer: Customer
    }

    type EmpAuth {
      token: ID
      employee: Employee
    }
    
    type Query {
      customers: [Customer]
      pizzas: [Pizza]
      # pizzas(_id: ID): [Pizza]
      orders: [Order]
      pizza(_id: ID!): Pizza
      customer(_id: ID!): Customer
      order(_id: ID!): Order
      # checkout(pizzas: [ID]!): Checkout
    }
    
    type Mutation {
      addCustomer(username: String!, phone: String, email: String, password: String, address: String): CustAuth
      addPizza(pizza: Pizza): Pizza
      updatePizza(_id: ID!): Pizza
      deletePizza(_id: ID!): Pizza
      addOrder(pizza: ID!): Order
      updateOrder(pizza: ID!): Order
      deleteOrder(pizza: ID!): Order
    }
`;

module.exports = typeDefs;