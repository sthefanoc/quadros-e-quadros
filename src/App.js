import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
  TestPage,
} from './pages';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';

function App({ idToken }) {
  const createApolloClient = (authToken) => {
    return new ApolloClient({
      link: new HttpLink({
        uri: 'http://localhost:8080/v1/graphql',
        credentials: 'same-origin',
        // headers: {
        //   Authorization: `Bearer ${authToken}`,
        // },
      }),
      cache: new InMemoryCache(),
    });
  };
  const client = createApolloClient(idToken);
  return (
    <ApolloProvider client={client}>
      <AuthWrapper>
        <Router>
          <Navbar />
          <Sidebar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/sobre'>
              <About />
            </Route>
            <Route path='/test'>
              <TestPage />
            </Route>
            <Route path='/carrinho'>
              <Cart />
            </Route>
            <Route exact path='/produtos'>
              <Products />
            </Route>
            <Route path='/produtos/:id' children={<SingleProduct />} />
            <PrivateRoute path='/checkout'>
              <Checkout />
            </PrivateRoute>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthWrapper>
    </ApolloProvider>
  );
}

export default App;
