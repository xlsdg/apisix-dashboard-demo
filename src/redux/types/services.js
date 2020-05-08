import _ from 'lodash';

import { generateTypesByNames } from '@/redux/types';

import Services from '@/services/services';

const NAMES = _.keys(Services);
export default generateTypesByNames(NAMES);
