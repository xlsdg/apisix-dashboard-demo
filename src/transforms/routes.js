import _ from 'lodash';

import Services from '@/services/routes';

import { getValue } from '@/utils/helper';
import { compareFn, getRecordKey } from '@/utils/format';

export function getRecords(data = {}, dataOptions) {
  const request = payload => ({});
  const response = payload =>
    _.map(getValue(payload, 'node.nodes', []), item => ({
      key: getRecordKey(item.key),
      id: item.createdIndex,
      description: getValue(item, 'value.desc'),
      uris: getValue(item, 'value.uris'),
      hosts: getValue(item, 'value.hosts'),
      remoteAddress: getValue(item, 'value.remote_addr'),
      methods: getValue(item, 'value.methods'),
      upstream: getValue(item, 'value.upstream_id'),
      service: getValue(item, 'value.service_id'),
      plugins: [],
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

  const response = payload => ({});

  return Services.getRecord(data.key)(request(data), dataOptions).then(response);
}

function handleAddAndEditRequest(type) {
  return payload => {
    const record = {};
    return record;
  };
}
