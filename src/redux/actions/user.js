import {
  generateActionsByTypes,
  generateStateSelector,
  generateUseStateSelector,
  generateDispatchSelector,
  generateUseDispatchSelector,
} from '@/redux/actions';
import TYPES from '@/redux/types/user';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);

export const createUserStateSelector = path => generateStateSelector(path, NAMESPACES.USER);
export const createUseUserStateSelector = path => generateUseStateSelector(path, NAMESPACES.USER);

export const createDispatchSelector = filter => generateDispatchSelector(filter, TYPES, actions, NAMESPACES.USER);
export const createUseDispatchSelector = filter => generateUseDispatchSelector(filter, TYPES, actions, NAMESPACES.USER);

export default actions;
