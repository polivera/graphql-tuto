const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./datasources/session')

const typeDefs = gql`
  type Query {
    sessions: [Session],
    sessionById(id: ID): Session
  }
  type Session {
    id: ID!,
    title: String!,
    description: String,
    startAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String @deprecated(reason: "this will go away in the future"),
    level: String
  }
`;

const resolvers = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => dataSources.sessionAPI.getSessions(),
    sessionById: (parent, {id}, {dataSources}, info) => dataSources.sessionAPI.getSessionById(id)
  }
}

const dataSources = () => ({
  sessionAPI: new SessionAPI()
})

const server = new ApolloServer({ typeDefs, resolvers, dataSources })

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => {
    console.log(`GraphQL running at ${url}`);
  });
