import {LOGIN_ROUTE, CHAT_ROUTE} from 'utils/consts.js';
import {Login, Chat} from 'components';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    component: Login,
    exact: true,
  }
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    component: Chat,
    exact: true,
  }
];
