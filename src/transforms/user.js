import Services from '@/services/user';

export function login(data, dataOptions) {
  const request = payload => ({});
  const response = payload => ({});

  return Services.login(request(data), dataOptions).then(response);
}

export function logout(data, dataOptions) {
  const request = payload => ({});
  const response = payload => ({});

  return Services.logout(request(data), dataOptions).then(response);
}
