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
