import _ from 'lodash';

import SslServices from '@/services/ssl';

import { getValue } from '@/utils/helper';

export function getRecords(data, dataOptions) {
  const request = payload => ({});
  const response = payload =>
    _.map(getValue(payload, 'node.nodes', []), item => ({
      id: item.createdIndex,
    }));

  return SslServices.getRecords(request(data), dataOptions).then(response);
}
