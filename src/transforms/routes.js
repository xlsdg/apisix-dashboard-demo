import RoutesServices from '@/services/routes';

export function getRecords(data, dataOptions) {
  const request = payload => ({});
  const response = payload => payload;

  return RoutesServices.getRecords(request(data), dataOptions).then(response);
}
