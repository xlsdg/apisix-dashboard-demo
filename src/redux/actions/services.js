import {
  generateActionsByTypes,
  generateStateSelector,
  generateUseStateSelector,
  generateDispatchSelector,
  generateUseDispatchSelector,
} from '@/redux/actions';
import TYPES from '@/redux/types/services';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);

export const createStateSelector = path => generateStateSelector(path, NAMESPACES.SERVICES);
export const createUseStateSelector = path => generateUseStateSelector(path, NAMESPACES.SERVICES);

export const createDispatchSelector = filter => generateDispatchSelector(filter, TYPES, actions, NAMESPACES.SERVICES);
export const createUseDispatchSelector = filter =>
  generateUseDispatchSelector(filter, TYPES, actions, NAMESPACES.SERVICES);

export default actions;
