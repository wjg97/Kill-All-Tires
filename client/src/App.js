import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./loginForm"
import Signup from "./signupForm"

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
    return (
      <ApolloClient client={client}>
        <Router>
          <Signup />
          <Login />
        </Router>
      </ApolloClient>
    );
  }
  export default App;
  