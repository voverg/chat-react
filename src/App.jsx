import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {Navbar, AppRouter} from 'components';
import 'App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
