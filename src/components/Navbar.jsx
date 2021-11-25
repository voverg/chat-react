import React, {useContext} from 'react';

import {AuthContext} from 'context';
import {BaseButton} from 'components/ui';

const Navbar = (props) => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = () => {
    setIsAuth(true);
  }

  const logout = () => {
    setIsAuth(false);
  }

  return (
    <div className="navbar">
      <div className="navbar__header">Чат</div>
      <div className="navbar__btns">
        {isAuth ?
          <BaseButton className="navbar__btn" onClick={logout}>Выйти</BaseButton>
          :
          <BaseButton className="navbar__btn" onClick={login}>Логин</BaseButton>
        }
      </div>
    </div>
  );
};

export default Navbar;
