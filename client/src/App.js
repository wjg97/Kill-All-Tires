import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Main from "./pages/Main";
import Index from "./pages/Index";

const httpLink = createHttpLink({
    uri: '/graphql'
  });
const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
    link: httpLink,
  });
  

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  }); 

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Index />
    </div>
    </ApolloProvider>
  );
}
export default App;
