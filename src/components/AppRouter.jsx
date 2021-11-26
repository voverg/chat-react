import React, {useContext} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

import {publicRoutes, privateRoutes} from 'routes.js';
import {AuthContext} from 'context';
import {CHAT_ROUTE, LOGIN_ROUTE} from 'utils/consts';
import {Spinner} from 'components/ui';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Spinner />;
  }

  return isAuth ?
    (
      <Routes>
        {privateRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
            exact={route.exact}
          />
        )}
        <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
      </Routes>
    )
    :
    (
      <Routes>
        {publicRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
            exact={route.exact}
          />
        )}
        <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
      </Routes>
    )


};

export default AppRouter;
