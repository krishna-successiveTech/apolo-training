import {
  ApolloServer,
  gql
} from 'apollo-server-express';
import express from 'express';

const app = express();
const typeDefs = gql `
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default class server {
    constructor(configuration) {
        this.config = configuration;
        this.run();
    }
    run() {
        const { port } = this.config;
        apolloServer.applyMiddleware({ app, path: '/' });
        app.listen({ port }, () => {
        console.log(`server is running on ${port}`);
});
    }
}


const books = [{
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];