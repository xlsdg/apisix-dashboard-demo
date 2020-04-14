import ServicesServices from '@/services/services';

export function getRecords(data, dataOptions) {
  const request = payload => ({});
  const response = payload => payload;

  return ServicesServices.getRecords(request(data), dataOptions).then(response);
}
