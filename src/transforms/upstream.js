import UpstreamServices from '@/services/upstream';

export function getRecords(data, dataOptions) {
  const request = payload => ({});
  const response = payload => payload;

  return UpstreamServices.getRecords(request(data), dataOptions).then(response);
}
