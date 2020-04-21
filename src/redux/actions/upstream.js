import {
  generateActionsByTypes,
  generateStateSelector,
  generateUseStateSelector,
  generateDispatchSelector,
  generateUseDispatchSelector,
} from '@/redux/actions';
import TYPES from '@/redux/types/upstream';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);

export const createStateSelector = path => generateStateSelector(path, NAMESPACES.UPSTREAM);
export const createUseStateSelector = path => generateUseStateSelector(path, NAMESPACES.UPSTREAM);

export const createDispatchSelector = filter => generateDispatchSelector(filter, TYPES, actions, NAMESPACES.UPSTREAM);
export const createUseDispatchSelector = filter =>
  generateUseDispatchSelector(filter, TYPES, actions, NAMESPACES.UPSTREAM);

export default actions;
