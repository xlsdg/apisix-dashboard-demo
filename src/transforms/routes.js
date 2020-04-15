import _ from 'lodash';

import RoutesServices from '@/services/routes';

import { getValue } from '@/utils/helper';

export function getRecords(data, dataOptions) {
  const request = payload => ({});
  const response = payload =>
    _.map(getValue(payload, 'node.nodes', []), item => ({
      id: item.createdIndex,
    }));

  return RoutesServices.getRecords(request(data), dataOptions).then(response);
}
