import {
  generateActionsByTypes,
  generateStateSelector,
  generateUseStateSelector,
  generateDispatchSelector,
  generateUseDispatchSelector,
} from '@/redux/actions';
import TYPES from '@/redux/types/ssl';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);

export const createStateSelector = path => generateStateSelector(path, NAMESPACES.SSL);
export const createUseStateSelector = path => generateUseStateSelector(path, NAMESPACES.SSL);

export const createDispatchSelector = filter => generateDispatchSelector(filter, TYPES, actions, NAMESPACES.SSL);
export const createUseDispatchSelector = filter => generateUseDispatchSelector(filter, TYPES, actions, NAMESPACES.SSL);

export default actions;
