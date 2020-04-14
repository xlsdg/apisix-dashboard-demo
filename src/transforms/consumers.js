import ConsumersServices from '@/services/consumers';

export function getRecords(data, dataOptions) {
  const request = payload => ({});
  const response = payload => payload;

  return ConsumersServices.getRecords(request(data), dataOptions).then(response);
}
