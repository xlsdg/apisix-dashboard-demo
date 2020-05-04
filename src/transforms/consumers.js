import _ from 'lodash';

import Services from '@/services/consumers';

import { hasArray, getValue } from '@/utils/helper';
import { compareFn, getRecordKey, getDecimalPrecision } from '@/utils/format';

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
  return payload => ({
    desc: payload.description,
    username: payload.userName,
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

export function getPlugins(data = {}, dataOptions) {
  const request = payload => ({});

  const response = payload => payload;

  return Services.getPlugins(request(data), dataOptions).then(response);
}

export function getPlugin(data = {}, dataOptions) {
  const request = payload => ({});

  const response = payload => createPluginFormItem([], _.omit(payload, ['id']));

  return Services.getPlugin(data.plugin)(request(data), dataOptions).then(response);
}

function createPluginFormItem(parent = [], settings = {}) {
  const type = getValue(settings, 'type');

  // 统一入口
  if (type === 'object') {
    const properties = getValue(settings, 'properties', {});
    const required = getValue(settings, 'required', []);
    const oneOf = getValue(settings, 'oneOf', []); // 提交表单时校验
    const min = getValue(settings, 'minProperties'); // 提交表单时校验

    return {
      name: parent,
      // required: ,
      tag: 'list',
      type: 'object',
      // default: defaultValue,
      // description,
      oneOf,
      min,
      items: _.map(properties, (setting, name) => ({
        name: [...parent, name],
        required: _.includes(required, name),
        ...createPluginFormItem([...parent, name], setting),
      })),
    };
  }

  const defaultValue = getValue(settings, 'default');
  const description = getValue(settings, 'description');

  if (type === 'array') {
    return {
      tag: 'list',
      type: 'array',
      default: defaultValue,
      description,
      min: getValue(settings, 'minItems'),
      max: getValue(settings, 'maxItems'),
      items: createPluginFormItem(parent, getValue(settings, 'items')),
    };
  }

  // 非整数
  if (type === 'number') {
    const min = getValue(settings, 'minimum');
    const max = getValue(settings, 'maximum');

    return {
      tag: 'input',
      type: 'number',
      default: defaultValue,
      description,
      min,
      max,
      precision: getDecimalPrecision(min) || getDecimalPrecision(max) || 8, // 位数
    };
  }

  // 整数
  if (type === 'integer') {
    return {
      tag: 'input',
      type: 'number',
      default: defaultValue,
      description,
      min: getValue(settings, 'minimum'),
      max: getValue(settings, 'maximum'),
      precision: 0,
    };
  }

  // 字符串
  if (type === 'string') {
    const options = getValue(settings, 'enum', []);

    // 单选
    if (hasArray(options)) {
      return {
        tag: 'select',
        type: 'text',
        default: defaultValue,
        description,
        options,
      };
    }

    // 输入框
    return {
      tag: 'input',
      type: 'text',
      default: defaultValue,
      description,
      min: getValue(settings, 'minLength'),
      max: getValue(settings, 'maxLength'),
      pattern: getValue(settings, 'pattern'),
      anyOf: getValue(settings, 'anyOf', []), // 规则或
    };
  }

  // 布尔
  if (type === 'boolean') {
    return {
      tag: 'input',
      type: 'switch',
      default: defaultValue,
      description,
    };
  }

  return {};
}
