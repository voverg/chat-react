import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

import {publicRoutes, privateRoutes} from 'routes.js';
import {Chat, Login} from 'components';
import {CHAT_ROUTE, LOGIN_ROUTE} from 'utils/consts';

const AppRouter = () => {
  const user = false;

  return user ?
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
