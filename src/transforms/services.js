import _ from 'lodash';

import ServicesServices from '@/services/services';

import { getValue } from '@/utils/helper';

export function getRecords(data, dataOptions) {
  const request = payload => ({});
  const response = payload =>
    _.map(getValue(payload, 'node.nodes', []), item => ({
      id: item.createdIndex,
    }));

  return ServicesServices.getRecords(request(data), dataOptions).then(response);
}
