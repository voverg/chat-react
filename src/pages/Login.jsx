import React from 'react';

import {LoginForm} from 'components';
import {Spinner} from 'components/ui';

const Login = (props) => {

  return (
    <div className="login container">
      <LoginForm />
    </div>
  );
};

export default Login;
