import React from 'react';
import { Route } from 'react-router-dom';

import ComingSoon from './ComingSoon';
import Header from './Header';
import SearchResults from './SearchResults';
import Footer from './Footer';

// Styled Components
import { AppContainer } from './styles/index';

function App() {
  return (
    <AppContainer>
      <Header />

      <Route exact path='/'>
        <SearchResults />
      </Route>

      <Route exact path='/coming-soon'>
        <ComingSoon />
      </Route>

      <Footer />
    </AppContainer>
  );
}

export default App;
