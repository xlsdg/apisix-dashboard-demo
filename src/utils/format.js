import _ from 'lodash';
import { hasString, hasArray } from '@/utils/helper';

export function compareFn(x, y) {
  return x - y;
}

export function getRecordKey(oldKey) {
  if (!hasString(oldKey)) {
    return oldKey;
  }

  const newKey = _.split(oldKey, '/');
  if (!hasArray(newKey) || newKey.length !== 4) {
    return oldKey;
  }

  return newKey[3];
}

export function getDecimalPrecision(value) {
  const num = _.split(`${value}`, '.');
  if (num.length < 2) {
    return 0;
  }

  return num.length < 2 ? 0 : num[1].length;
}
