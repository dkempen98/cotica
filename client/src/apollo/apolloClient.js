import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cotica',
  cache: new InMemoryCache(),
  // additional configuration if needed
});

export default client;