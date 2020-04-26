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
      userName: getValue(item, 'value.username'),
      description: getValue(item, 'value.desc'),
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
    userName: getValue(payload, 'node.value.username'),
    plugins: _.toPairs(getValue(payload, 'node.value.plugins', {})),
  });

  return Services.getRecord(data.key)(request(data), dataOptions).then(response);
}

function handleAddAndEditRequest(type) {
  return payload => {
    const record = {};
    return record;
  };
}

export function getPlugins(data = {}, dataOptions) {
  const request = payload => ({});

  const response = payload => payload;

  return Services.getPlugins(request(data), dataOptions).then(response);
}

export function getPlugin(data = {}, dataOptions) {
  const request = payload => ({});

  const response = payload => payload;

  return Services.getPlugin(data.plugin)(request(data), dataOptions).then(response);
}
