import { generateActionsByTypes, generateDispatchesByTypes, createStateSelector } from '@/redux/actions';
import TYPES from '@/redux/types/services';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);
export const dispatches = generateDispatchesByTypes(TYPES, actions, NAMESPACES.SERVICES);
export const createServicesStateSelector = path => createStateSelector(path, NAMESPACES.SERVICES);
export default actions;
