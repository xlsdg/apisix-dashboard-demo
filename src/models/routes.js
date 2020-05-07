import _ from 'lodash';
import { history } from 'umi';

import NAMESPACES from '@/redux/namespaces';
import { PageEvents, generatePutStateAction, generateEffectStateSelector, setStateReducer } from '@/redux/actions';

import RoutesActions from '@/redux/actions/routes';
import * as RoutesTransforms from '@/transforms/routes';

import { generateSubscriptionByRoutes, hasArray, hasString, hasPlainObject } from '@/utils/helper';

const InitialState = {
  records: [],
  record: {},
};

const StateAt = generatePutStateAction(InitialState, 0);
const StateFrom = generateEffectStateSelector(InitialState, 0, NAMESPACES.ROUTES);

const Routes = {
  '/dashboard/routes': PageEvents,
  '/dashboard/routes/edit/:id': PageEvents,
};

// action: error, type, payload, meta
// effects: take, put, all, race, call, apply, cps, fork, spawn, join, cancel, select,
//          actionChannel, cancelled, flush, getContext, setContext, takeEvery, takeLatest, throttle
export default {
  namespace: NAMESPACES.ROUTES,
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

      if (match[0] === '/dashboard/routes') {
        yield put(RoutesActions.getRecords());
        return;
      }

      if (_.startsWith(match[0], '/dashboard/routes/edit/') && match.length === 2) {
        yield put(RoutesActions.getRecord({ key: match[1] }));
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

      if (match[0] === '/dashboard/routes') {
        yield put(RoutesActions.getRecords());
        return;
      }

      if (_.startsWith(match[0], '/dashboard/routes/edit/') && match.length === 2) {
        yield put(RoutesActions.getRecord({ key: match[1] }));
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

      if (match[0] === '/dashboard/routes') {
        // yield put(StateAt({ records: [] }));
        return;
      }

      if (_.startsWith(match[0], '/dashboard/routes/edit/') && match.length === 2) {
        yield put(StateAt({ record: {} }));
        return;
      }
    },
    *getRecords(action, effects) {
      const { payload } = action;
      const { put, call } = effects;

      const records = yield call(RoutesTransforms.getRecords, payload);

      yield put(StateAt({ records }));
    },
    *addRecord(action, effects) {
      const { payload } = action;
      const { call } = effects;

      const { key } = yield call(RoutesTransforms.addRecord, payload);

      if (hasString(key)) {
        history.push('/dashboard/routes');
      }
    },
    *deleteRecord(action, effects) {
      const { payload } = action;
      const { put, call } = effects;

      const { key } = yield call(RoutesTransforms.deleteRecord, payload);

      if (key === payload.key) {
        yield put(RoutesActions.getRecords());
      }
    },
    *editRecord(action, effects) {
      const { payload } = action;
      const { call } = effects;

      const { key } = yield call(RoutesTransforms.editRecord, payload);

      if (hasString(key)) {
        history.push('/dashboard/routes');
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
        record = yield call(RoutesTransforms.getRecord, payload);
      } catch (error) {
        history.push('/dashboard/routes');
      }

      yield put(StateAt({ record }));
    },
  },
  reducers: setStateReducer,
};
