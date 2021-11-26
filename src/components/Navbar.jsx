import React, {useState, useEffect, useContext} from 'react';

import {AuthContext} from 'context';
import {BaseButton} from 'components/ui';

const Navbar = (props) => {
  const {isAuth, setIsAuth, user, setUser} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    setUser('');
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
  }

  return (
    <div className="navbar">
      <div className="navbar__header">{isAuth && user ? `Привет, ${user}!` : 'Чат'}</div>
      <div className="navbar__btns">
        {isAuth ?
          <BaseButton className="navbar__btn" onClick={logout}>Выйти</BaseButton>
          :
          <div className="navbar__login">Логин</div>
        }
      </div>
    </div>
  );
};

export default Navbar;
