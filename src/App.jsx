import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {AuthContext} from 'context';
import {Navbar, AppRouter} from 'components';
import 'App.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }

    if (localStorage.getItem('user')) {
      setUser(localStorage.getItem('user'));
    }

    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      user,
      setUser,
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
