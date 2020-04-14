import UserServices from '@/services/user';

export function login(data, dataOptions) {
  const request = payload => ({ username: payload.username, password: payload.password });
  const response = payload => payload;

  return UserServices.login(request(data), dataOptions).then(response);
}

export function logout(data, dataOptions) {
  const request = payload => ({});
  const response = payload => payload;

  return UserServices.login(request(data), dataOptions).then(response);
}
