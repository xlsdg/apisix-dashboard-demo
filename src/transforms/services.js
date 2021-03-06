import _ from 'lodash';

import Services from '@/services/services';

import { getValue } from '@/utils/helper';
import { compareFn, getRecordKey } from '@/utils/format';

export function getRecords(data = {}, dataOptions) {
  const request = payload => ({});
  const response = payload =>
    _.map(getValue(payload, 'node.nodes', []), item => ({
      key: getRecordKey(item.key),
      id: item.createdIndex,
      description: getValue(item, 'value.desc'),
      upstream: getValue(item, 'value.upstream_id'),
      plugins: _.toPairs(getValue(item, 'value.plugins', {})),
    })).sort((x, y) => -compareFn(x.id, y.id));

  return Services.getRecords(request(data), dataOptions).then(response);
}

export function addRecord(data = {}, dataOptions) {
  const request = handleAddAndEditRequest('add');

  const response = payload => ({
    key: getRecordKey(getValue(payload, 'node.key')),
  });

  return Services.addRecord(request(data), dataOptions).then(response);
}

export function deleteRecord(data = {}, dataOptions) {
  const request = payload => ({});

  const response = payload => ({
    key: getRecordKey(getValue(payload, 'node.key')),
  });

  return Services.deleteRecord(data.key)(request(data), dataOptions).then(response);
}

export function editRecord(data = {}, dataOptions) {
  const request = handleAddAndEditRequest('edit');

  const response = payload => ({
    key: getRecordKey(getValue(payload, 'node.key')),
  });

  return Services.editRecord(data.key)(request(data), dataOptions).then(response);
}

export function getRecord(data = {}, dataOptions) {
  const request = payload => ({});

  const response = payload => ({
    key: getRecordKey(getValue(payload, 'node.key')),
    id: getValue(payload, 'node.createdIndex'),
    description: getValue(payload, 'node.value.desc'),
    upstream: getValue(payload, 'node.value.upstream_id'),
    plugins: _.toPairs(getValue(payload, 'node.value.plugins', {})),
  });

  return Services.getRecord(data.key)(request(data), dataOptions).then(response);
}

function handleAddAndEditRequest(type) {
  return payload => ({
    desc: payload.description,
    upstream_id: payload.upstream,
    plugins: _.reduce(
      payload.plugins,
      (result, plugin) => {
        const name = plugin[0];
        const props = plugin[1];
        result[name] = props;
        return result;
      },
      {}
    ),
  });
}
