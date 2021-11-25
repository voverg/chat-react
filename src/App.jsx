import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {AuthContext} from 'context';
import {Navbar, AppRouter} from 'components';
import 'App.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
    }}
    >
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <AppRouter />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
