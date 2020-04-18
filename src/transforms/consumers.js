import _ from 'lodash';

import Services from '@/services/consumers';

import { getValue } from '@/utils/helper';
import { compareFn, getRecordKey } from '@/utils/format';

export function getRecords(data = {}, dataOptions) {
  const request = payload => ({});
  const response = payload =>
    _.map(getValue(payload, 'node.nodes', []), item => ({
      key: getRecordKey(item.key),
      id: item.createdIndex,
      username: getValue(item, 'value.username'),
      description: getValue(item, 'value.desc'),
    })).sort((x, y) => -compareFn(x.id, y.id));

  return Services.getRecords(request(data), dataOptions).then(response);
}
