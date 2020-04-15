import _ from 'lodash';

import UpstreamServices from '@/services/upstream';

import { getValue } from '@/utils/helper';

export function getRecords(data, dataOptions) {
  const request = payload => ({});
  const response = payload =>
    _.map(getValue(payload, 'node.nodes', []), item => ({
      id: item.createdIndex,
    }));

  return UpstreamServices.getRecords(request(data), dataOptions).then(response);
}
