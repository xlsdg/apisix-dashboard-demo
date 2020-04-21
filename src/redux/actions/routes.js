import {
  generateActionsByTypes,
  generateStateSelector,
  generateUseStateSelector,
  generateDispatchSelector,
  generateUseDispatchSelector,
} from '@/redux/actions';
import TYPES from '@/redux/types/routes';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);

export const createStateSelector = path => generateStateSelector(path, NAMESPACES.ROUTES);
export const createUseStateSelector = path => generateUseStateSelector(path, NAMESPACES.ROUTES);

export const createDispatchSelector = filter => generateDispatchSelector(filter, TYPES, actions, NAMESPACES.ROUTES);
export const createUseDispatchSelector = filter =>
  generateUseDispatchSelector(filter, TYPES, actions, NAMESPACES.ROUTES);

export default actions;
