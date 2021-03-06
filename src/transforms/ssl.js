import _ from 'lodash';

import Services from '@/services/ssl';

import { getValue } from '@/utils/helper';
import { compareFn, getRecordKey } from '@/utils/format';

export function getRecords(data = {}, dataOptions) {
  const request = payload => ({});

  const response = payload =>
    _.map(getValue(payload, 'node.nodes', []), item => ({
      key: getRecordKey(item.key),
      id: item.createdIndex,
      sni: getValue(item, 'value.sni'),
      publicKey: getValue(item, 'value.cert'),
      privateKey: getValue(item, 'value.key'),
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
    sni: getValue(payload, 'node.value.sni'),
    publicKey: getValue(payload, 'node.value.cert'),
    privateKey: getValue(payload, 'node.value.key'),
  });

  return Services.getRecord(data.key)(request(data), dataOptions).then(response);
}

function handleAddAndEditRequest(type) {
  return payload => ({
    sni: payload.sni,
    cert: payload.publicKey,
    key: payload.privateKey,
  });
}
