import _ from 'lodash';

import Services from '@/services/ssl';

import { getValue } from '@/utils/helper';
import { compareFn } from '@/utils/format';

export function getRecords(data, dataOptions) {
  const request = payload => ({});
  const response = payload =>
    _.map(getValue(payload, 'node.nodes', []), item => ({
      key: item.key,
      id: item.createdIndex,
      sni: getValue(item, 'value.sni'),
    })).sort((x, y) => -compareFn(x.id, y.id));

  return Services.getRecords(request(data), dataOptions).then(response);
}
