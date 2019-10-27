import React from 'react';
import { Route } from 'react-router-dom';

import ComingSoon from './ComingSoon';
import Header from './Header';
import SearchResults from './SearchResults';

function App() {
  return (
    <div className='App'>
      <Header />
      <Route exact path='/'>
        <SearchResults />
      </Route>

      <Route exact path='/coming-soon'>
        <ComingSoon />
      </Route>
    </div>
  );
}

export default App;
