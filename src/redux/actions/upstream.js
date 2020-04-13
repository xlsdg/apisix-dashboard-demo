import { generateActionsByTypes, generateDispatchesByTypes, createStateSelector } from '@/redux/actions';
import TYPES from '@/redux/types/upstream';
import NAMESPACES from '@/redux/namespaces';

export const actions = generateActionsByTypes(TYPES);
export const dispatches = generateDispatchesByTypes(TYPES, actions, NAMESPACES.UPSTREAM);
export const createUpstreamStateSelector = path => createStateSelector(path, NAMESPACES.UPSTREAM);
export default actions;
