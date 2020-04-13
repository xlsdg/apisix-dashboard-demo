import { generateActionsByTypes, generateDispatchesByTypes, createStateSelector } from '@/redux/actions';
import TYPES from '@/redux/types/ssl';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);
export const dispatches = generateDispatchesByTypes(TYPES, actions, NAMESPACES.SSL);
export const createSslStateSelector = path => createStateSelector(path, NAMESPACES.SSL);
export default actions;
