import {
  generateActionsByTypes,
  generateDispatchesByTypes,
  generateStateSelector,
  generateLoadingSelector,
} from '@/redux/actions';
import TYPES from '@/redux/types/user';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);
export const dispatches = generateDispatchesByTypes(TYPES, actions, NAMESPACES.USER);
export const createUserStateSelector = path => generateStateSelector(path, NAMESPACES.USER);
export const createLoadingSelector = generateLoadingSelector(TYPES, NAMESPACES.USER);
export default actions;
