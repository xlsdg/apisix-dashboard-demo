import _ from 'lodash';

import { generateTypesByNames } from '@/redux/types';

import Services from '@/services/upstream';

const NAMES = _.keys(Services);
export default generateTypesByNames(NAMES);
