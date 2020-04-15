import {
  generateActionsByTypes,
  generateDispatchesByTypes,
  generateStateSelector,
  generateLoadingSelector,
} from '@/redux/actions';
import TYPES from '@/redux/types/ssl';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);
export const dispatches = generateDispatchesByTypes(TYPES, actions, NAMESPACES.SSL);
export const createStateSelector = path => generateStateSelector(path, NAMESPACES.SSL);
export const createLoadingSelector = generateLoadingSelector(TYPES, NAMESPACES.SSL);
export default actions;
