import {
  generateActionsByTypes,
  generateDispatchesByTypes,
  generateStateSelector,
  generateLoadingSelector,
} from '@/redux/actions';
import TYPES from '@/redux/types/services';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);
export const dispatches = generateDispatchesByTypes(TYPES, actions, NAMESPACES.SERVICES);
export const createStateSelector = path => generateStateSelector(path, NAMESPACES.SERVICES);
export const createLoadingSelector = generateLoadingSelector(TYPES, NAMESPACES.SERVICES);
export default actions;
