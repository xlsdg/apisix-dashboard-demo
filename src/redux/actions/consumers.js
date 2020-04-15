import {
  generateActionsByTypes,
  generateDispatchesByTypes,
  generateStateSelector,
  generateLoadingSelector,
} from '@/redux/actions';
import TYPES from '@/redux/types/consumers';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);
export const dispatches = generateDispatchesByTypes(TYPES, actions, NAMESPACES.CONSUMERS);
export const createStateSelector = path => generateStateSelector(path, NAMESPACES.CONSUMERS);
export const createLoadingSelector = generateLoadingSelector(TYPES, NAMESPACES.CONSUMERS);
export default actions;
