import SslServices from '@/services/ssl';

export function getRecords(data, dataOptions) {
  const request = payload => ({});
  const response = payload => payload;

  return SslServices.getRecords(request(data), dataOptions).then(response);
}
