import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import login from "./loginForm"
import signup from "./signupForm"

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
    return (
      <ApolloClient>
        <Router>
          <signup />
          <login />
        </Router>
      </ApolloClient>
    );
  }
  export default App;
  