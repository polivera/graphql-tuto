const { gql } = require('apollo-server')

module.exports = gql`
  type Query {
    sessions(
      title: String
      description: String
      startAt: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
    ): [Session],
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

