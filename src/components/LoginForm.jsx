import React, {useState, useContext} from 'react';

import {AuthContext} from 'context';
import {BaseInput, BaseButton} from 'components/ui';

const LoginForm = (props) => {
  const {isAuth, setIsAuth, isLoading} = useContext(AuthContext);
  const [user, setUser] = useState('');

  const onChange = (event) => {
    const value = event.target.value;
    setUser(value)
  };

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);

    localStorage.setItem('auth', 'true');
    localStorage.setItem('user', `${user}`);
  };

  return (
    <form className="login-form" onSubmit={login}>
      <h3 className="login-form__header">
        Введите имя, которое будет отбражаться в чате
      </h3>
      <BaseInput
        type="text"
        className="login-form__input"
        placeholder="Введите ваше имя..."
        required
        value={user}
        onChange={onChange}
      />
      <BaseButton
        className="login-form__btn"
      >
        Go!
      </BaseButton>
    </form>
  );
};

export default LoginForm;
