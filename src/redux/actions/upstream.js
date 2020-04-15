import {
  generateActionsByTypes,
  generateDispatchesByTypes,
  generateStateSelector,
  generateLoadingSelector,
} from '@/redux/actions';
import TYPES from '@/redux/types/upstream';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);
export const dispatches = generateDispatchesByTypes(TYPES, actions, NAMESPACES.UPSTREAM);
export const createStateSelector = path => generateStateSelector(path, NAMESPACES.UPSTREAM);
export const createLoadingSelector = generateLoadingSelector(TYPES, NAMESPACES.UPSTREAM);
export default actions;
