import _ from 'lodash';
import { history } from 'umi';

import NAMESPACES from '@/redux/namespaces';
import { PageEvents, generatePutStateAction, generateEffectStateSelector, setStateReducer } from '@/redux/actions';

import ServicesActions from '@/redux/actions/services';
import * as ServicesTransforms from '@/transforms/services';

import { generateSubscriptionByRoutes, hasArray, hasString, hasPlainObject } from '@/utils/helper';

const InitialState = {
  records: [],
  record: {},
};

const StateAt = generatePutStateAction(InitialState, 0);
const StateFrom = generateEffectStateSelector(InitialState, 0, NAMESPACES.SERVICES);

const Routes = {
  '/dashboard/services': PageEvents,
  '/dashboard/services/edit/:id': PageEvents,
};

// action: error, type, payload, meta
// effects: take, put, all, race, call, apply, cps, fork, spawn, join, cancel, select,
//          actionChannel, cancelled, flush, getContext, setContext, takeEvery, takeLatest, throttle
export default {
  namespace: NAMESPACES.SERVICES,
  state: _.cloneDeep(InitialState),
  subscriptions: {
    setup: generateSubscriptionByRoutes(Routes),
  },
  effects: {
    *enterPage(action, effects) {
      const { payload } = action;
      const { put } = effects;

      const { match } = payload;
      if (!hasArray(match)) {
        return;
      }

      if (match[0] === '/dashboard/services') {
        yield put(ServicesActions.getRecords());
        return;
      }

      if (_.startsWith(match[0], '/dashboard/services/edit/') && match.length === 2) {
        yield put(ServicesActions.getRecord({ key: match[1] }));
        return;
      }
    },
    *changePage(action, effects) {
      const { payload } = action;
      const { put } = effects;

      const { match } = payload;
      if (!hasArray(match)) {
        return;
      }

      if (match[0] === '/dashboard/services') {
        yield put(ServicesActions.getRecords());
        return;
      }

      if (_.startsWith(match[0], '/dashboard/services/edit/') && match.length === 2) {
        yield put(ServicesActions.getRecord({ key: match[1] }));
        return;
      }
    },
    *leavePage(action, effects) {
      const { payload } = action;
      const { put } = effects;

      const { match } = payload;
      if (!hasArray(match)) {
        return;
      }

      if (match[0] === '/dashboard/services') {
        // yield put(StateAt({ records: [] }));
        return;
      }

      if (_.startsWith(match[0], '/dashboard/services/edit/') && match.length === 2) {
        yield put(StateAt({ record: {} }));
        return;
      }
    },
    *getRecords(action, effects) {
      const { payload } = action;
      const { put, call } = effects;

      const records = yield call(ServicesTransforms.getRecords, payload);

      yield put(StateAt({ records }));
    },
    *addRecord(action, effects) {
      const { payload } = action;
      const { call } = effects;

      const { key } = yield call(ServicesTransforms.addRecord, payload);

      if (hasString(key)) {
        history.push('/dashboard/services');
      }
    },
    *deleteRecord(action, effects) {
      const { payload } = action;
      const { put, call } = effects;

      const { key } = yield call(ServicesTransforms.deleteRecord, payload);

      if (key === payload.key) {
        yield put(ServicesActions.getRecords());
      }
    },
    *editRecord(action, effects) {
      const { payload } = action;
      const { call } = effects;

      const { key } = yield call(ServicesTransforms.editRecord, payload);

      if (hasString(key)) {
        history.push('/dashboard/services');
      }
    },
    *getRecord(action, effects) {
      const { payload } = action;
      const { put, call, select } = effects;

      let { records, record } = yield select(StateFrom);

      if (hasPlainObject(record) && record.key === payload.key) {
        return;
      }

      if (hasArray(records)) {
        const targets = _.filter(records, r => r.key === payload.key);
        if (hasArray(targets)) {
          if (targets.length === 1) {
            yield put(StateAt({ record: targets[0] }));
            return;
          }

          // TODO: 表格多行合并的时候会遇到
          // if (targets.length > 1) {}
        }
      }

      try {
        record = yield call(ServicesTransforms.getRecord, payload);
      } catch (error) {
        history.push('/dashboard/services');
      }

      yield put(StateAt({ record }));
    },
  },
  reducers: setStateReducer,
};
