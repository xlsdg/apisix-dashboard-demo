// import _ from 'lodash';
import Store from 'store';

import { hasString } from '@/utils/helper';

export function isLoggedIn() {
  return Promise.resolve(hasString(getToken()));
}

export function getToken(defaultValue) {
  const data = Store.get('token');
  return hasString(data) ? data : defaultValue;
}

export function setToken(data) {
  return Store.set('token', data);
}

export function removeToken() {
  return Store.remove('token');
}
