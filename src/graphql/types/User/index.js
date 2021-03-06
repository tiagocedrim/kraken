export default `
  type User {
    _id: String!
    name: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    login: User!
  }

`;
