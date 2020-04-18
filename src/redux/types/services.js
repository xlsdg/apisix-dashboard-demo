import { generateTypesByNames } from '@/redux/types';

const NAMES = ['getRecords', 'addRecord', 'deleteRecord', 'editRecord', 'getRecord'];
export default generateTypesByNames(NAMES);
