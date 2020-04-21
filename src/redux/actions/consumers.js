import {
  generateActionsByTypes,
  generateStateSelector,
  generateUseStateSelector,
  generateDispatchSelector,
  generateUseDispatchSelector,
} from '@/redux/actions';
import TYPES from '@/redux/types/consumers';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);

export const createStateSelector = path => generateStateSelector(path, NAMESPACES.CONSUMERS);
export const createUseStateSelector = path => generateUseStateSelector(path, NAMESPACES.CONSUMERS);

export const createDispatchSelector = filter => generateDispatchSelector(filter, TYPES, actions, NAMESPACES.CONSUMERS);
export const createUseDispatchSelector = filter =>
  generateUseDispatchSelector(filter, TYPES, actions, NAMESPACES.CONSUMERS);

export default actions;
