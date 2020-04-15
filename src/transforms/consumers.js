import _ from 'lodash';

import ConsumersServices from '@/services/consumers';

import { getValue } from '@/utils/helper';

export function getRecords(data, dataOptions) {
  const request = payload => ({});
  const response = payload =>
    _.map(getValue(payload, 'node.nodes', []), item => ({
      id: item.createdIndex,
    }));

  return ConsumersServices.getRecords(request(data), dataOptions).then(response);
}
