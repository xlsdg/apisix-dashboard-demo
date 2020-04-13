import { generateActionsByTypes, generateDispatchesByTypes, createStateSelector } from '@/redux/actions';
import TYPES from '@/redux/types/routes';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);
export const dispatches = generateDispatchesByTypes(TYPES, actions, NAMESPACES.ROUTES);
export const createRoutesStateSelector = path => createStateSelector(path, NAMESPACES.ROUTES);
export default actions;
