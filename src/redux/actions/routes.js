import {
  generateActionsByTypes,
  generateDispatchesByTypes,
  generateStateSelector,
  generateLoadingSelector,
} from '@/redux/actions';
import TYPES from '@/redux/types/routes';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);
export const dispatches = generateDispatchesByTypes(TYPES, actions, NAMESPACES.ROUTES);
export const createStateSelector = path => generateStateSelector(path, NAMESPACES.ROUTES);
export const createLoadingSelector = generateLoadingSelector(TYPES, NAMESPACES.ROUTES);
export default actions;
