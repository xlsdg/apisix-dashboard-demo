import _ from 'lodash';

import Services from '@/services/upstream';

import { hasArray, getValue } from '@/utils/helper';
import { compareFn, getRecordKey } from '@/utils/format';

const HASH_ON_KEYS = [
  {
    name: 'vars',
    value: 'vars',
  },
  {
    name: 'header',
    value: 'header',
  },
  {
    name: 'cookie',
    value: 'cookie',
  },
  {
    name: 'consumer',
    value: 'consumer',
  },
];

export const TYPES = {
  roundrobin: {
    hashOn: {
      map: 'hash_on',
      items: HASH_ON_KEYS,
    },
  },
  chash: {
    hashOn: {
      map: 'hash_on',
      items: HASH_ON_KEYS,
    },
    hashKey: {
      map: 'key',
      items: [
        {
          name: 'remote_addr',
          value: 'remote_addr',
        },
        {
          name: 'host',
          value: 'host',
        },
        {
          name: 'uri',
          value: 'uri',
        },
        {
          name: 'server_name',
          value: 'server_name',
        },
        {
          name: 'server_addr',
          value: 'server_addr',
        },
        {
          name: 'request_uri',
          value: 'request_uri',
        },
        {
          name: 'query_string',
          value: 'query_string',
        },
        {
          name: 'remote_port',
          value: 'remote_port',
        },
        {
          name: 'hostname',
          value: 'hostname',
        },
        {
          name: 'arg_id',
          value: 'arg_id',
        },
      ],
    },
  },
};

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

        defaultRecord[defaultRecord.type] = _.reduce(
          TYPES[defaultRecord.type],
          (result, prop, name) => {
            result[name] = getValue(item, `value.${prop.map}`);
            return result;
          },
          {}
        );

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

    record[record.type] = _.reduce(
      TYPES[record.type],
      (result, prop, name) => {
        result[name] = getValue(payload, `node.value.${prop.map}`);
        return result;
      },
      {}
    );

    return record;
  };

  return Services.getRecord(data.key)(request(data), dataOptions).then(response);
}

function handleAddAndEditRequest(type) {
  return payload => {
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

    _.each(TYPES[payload.type], (prop, name) => {
      record[prop.map] = payload[payload.type][name];
    });

    return record;
  };
}
