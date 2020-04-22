import _ from 'lodash';

import Services from '@/services/upstream';

import { hasArray, getValue } from '@/utils/helper';
import { compareFn, getRecordKey } from '@/utils/format';

export function getRecords(data = {}, dataOptions) {
  const request = payload => ({});
  const response = payload =>
    _.reduce(
      getValue(payload, 'node.nodes', []),
      (records, item) => {
        const defaultRecord = {
          key: getRecordKey(item.key),
          id: item.createdIndex,
          description: getValue(item, 'value.desc'),
          type: getValue(item, 'value.type'),
          websocket: getValue(item, 'value.enable_websocket'),
          node: {
            host: undefined,
            port: undefined,
            weights: undefined,
          },
          rowSpan: undefined,
        };

        if (defaultRecord.type === 'chash') {
          defaultRecord['chash'] = {
            key: getValue(item, 'value.key'),
            hashOn: getValue(item, 'value.hash_on'),
          };
        }

        if (defaultRecord.type === 'roundrobin') {
          defaultRecord['roundrobin'] = {
            hashOn: getValue(item, 'value.hash_on'),
          };
        }

        const nodes = _.toPairs(getValue(item, 'value.nodes', {}));
        const result = _.map(nodes, (n, index) => {
          const [node, weights] = n;
          const record = _.cloneDeep(defaultRecord);

          // 单元格行合并标记
          if (index === 0) {
            record.rowSpan = nodes.length;
          } else {
            record.rowSpan = 0;
          }

          const host = _.split(node, ':');
          if (hasArray(host) && host.length > 1) {
            record.node = {
              host: host[0],
              port: host[1],
              weights,
            };
            return record;
          }

          record.node = {
            host,
            port: undefined,
            weights,
          };
          return record;
        });

        return _.concat(records, hasArray(result) ? result : defaultRecord);
      },
      []
    ).sort((x, y) => -compareFn(x.id, y.id));

  return Services.getRecords(request(data), dataOptions).then(response);
}

export function addRecord(data = {}, dataOptions) {
  const request = payload => {
    const record = {
      desc: payload.description,
      type: payload.type,
      enable_websocket: payload.websocket,
      nodes: _.reduce(
        payload.nodes,
        (result, item) => {
          result[`${item.host}:${item.port}`] = item.weights;
          return result;
        },
        {}
      ),
    };

    if (payload.type === 'chash') {
      record['key'] = payload['chash'].key;
      record['hash_on'] = payload['chash'].hashOn;
    }

    if (payload.type === 'roundrobin') {
      record['hash_on'] = payload['roundrobin'].hashOn;
    }

    return record;
  };

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
  const request = payload => {
    const record = {
      desc: payload.description,
      type: payload.type,
      enable_websocket: payload.websocket,
      nodes: _.reduce(
        payload.nodes,
        (result, item) => {
          result[`${item.host}:${item.port}`] = item.weights;
          return result;
        },
        {}
      ),
    };

    if (payload.type === 'chash') {
      record['key'] = payload['chash'].key;
      record['hash_on'] = payload['chash'].hashOn;
    }

    if (payload.type === 'roundrobin') {
      record['hash_on'] = payload['roundrobin'].hashOn;
    }

    return record;
  };

  const response = payload => ({
    key: getRecordKey(getValue(payload, 'node.key')),
  });

  return Services.editRecord(data.key)(request(data), dataOptions).then(response);
}

export function getRecord(data = {}, dataOptions) {
  const request = payload => ({});

  const response = payload => {
    const record = {
      key: getRecordKey(getValue(payload, 'node.key')),
      id: getValue(payload, 'node.createdIndex'),
      description: getValue(payload, 'node.value.desc'),
      type: getValue(payload, 'node.value.type'),
      websocket: getValue(payload, 'node.value.enable_websocket'),
      nodes: _.map(_.toPairs(getValue(payload, 'node.value.nodes', {})), n => {
        const [node, weights] = n;

        const host = _.split(node, ':');
        if (hasArray(host) && host.length > 1) {
          return {
            host: host[0],
            port: host[1],
            weights,
          };
        }

        return {
          host,
          port: undefined,
          weights,
        };
      }),
    };

    if (record.type === 'chash') {
      record['chash'] = {
        key: getValue(payload, 'node.value.key'),
        hashOn: getValue(payload, 'node.value.hash_on'),
      };
    }

    if (record.type === 'roundrobin') {
      record['roundrobin'] = {
        hashOn: getValue(payload, 'node.value.hash_on'),
      };
    }

    return record;
  };

  return Services.getRecord(data.key)(request(data), dataOptions).then(response);
}
