import { generateActionsByTypes, generateDispatchesByTypes, createStateSelector } from '@/redux/actions';
import TYPES from '@/redux/types/consumers';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);
export const dispatches = generateDispatchesByTypes(TYPES, actions, NAMESPACES.CONSUMERS);
export const createConsumersStateSelector = path => createStateSelector(path, NAMESPACES.CONSUMERS);
export default actions;
