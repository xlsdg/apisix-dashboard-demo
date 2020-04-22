import _ from 'lodash';
import { history } from 'umi';

import NAMESPACES from '@/redux/namespaces';
import PageActions, { generatePutStateAction, generateEffectStateSelector, setStateReducer } from '@/redux/actions';

import ConsumersActions from '@/redux/actions/consumers';
import * as ConsumersTransforms from '@/transforms/consumers';

import { generateSubscriptionByRoutes, hasArray, hasString, hasPlainObject } from '@/utils/helper';

const InitialState = {
  records: [],
  record: {},
};

const StateAt = generatePutStateAction(InitialState, 0);
const StateFrom = generateEffectStateSelector(InitialState, 0, NAMESPACES.CONSUMERS);

const Routes = {
  '/dashboard/consumers': {
    onEnter: ({ dispatch, ...others }) => {
      // console.log('Enter /');
      return dispatch(PageActions.enterPage(others));
    },
    onChange: ({ dispatch, ...others }) => {
      // console.log('Change /');
      return dispatch(PageActions.changePage(others));
    },
    onLeave: ({ dispatch, ...others }) => {
      // console.log('Leave /');
      return dispatch(PageActions.leavePage(others));
    },
  },
  '/dashboard/consumers/edit/:id': {
    onEnter: ({ dispatch, ...others }) => {
      // console.log('Enter /');
      return dispatch(PageActions.enterPage(others));
    },
    onChange: ({ dispatch, ...others }) => {
      // console.log('Change /');
      return dispatch(PageActions.changePage(others));
    },
    onLeave: ({ dispatch, ...others }) => {
      // console.log('Leave /');
      return dispatch(PageActions.leavePage(others));
    },
  },
};

// action: error, type, payload, meta
// effects: take, put, all, race, call, apply, cps, fork, spawn, join, cancel, select,
//          actionChannel, cancelled, flush, getContext, setContext, takeEvery, takeLatest, throttle
export default {
  namespace: NAMESPACES.CONSUMERS,
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

      if (match[0] === '/dashboard/consumers') {
        yield put(ConsumersActions.getRecords());
        return;
      }

      if (_.startsWith(match[0], '/dashboard/consumers/edit/') && match.length === 2) {
        yield put(ConsumersActions.getRecord({ key: match[1] }));
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

      if (match[0] === '/dashboard/consumers') {
        yield put(ConsumersActions.getRecords());
        return;
      }

      if (_.startsWith(match[0], '/dashboard/consumers/edit/') && match.length === 2) {
        yield put(ConsumersActions.getRecord({ key: match[1] }));
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

      if (match[0] === '/dashboard/consumers') {
        // yield put(StateAt({ records: [] }));
        return;
      }

      if (_.startsWith(match[0], '/dashboard/consumers/edit/') && match.length === 2) {
        yield put(StateAt({ record: {} }));
        return;
      }
    },
    *getRecords(action, effects) {
      const { payload } = action;
      const { put, call } = effects;

      const records = yield call(ConsumersTransforms.getRecords, payload);

      yield put(StateAt({ records }));
    },
    *addRecord(action, effects) {
      const { payload } = action;
      const { call } = effects;

      const { key } = yield call(ConsumersTransforms.addRecord, payload);

      if (hasString(key)) {
        history.push('/dashboard/consumers');
      }
    },
    *deleteRecord(action, effects) {
      const { payload } = action;
      const { put, call } = effects;

      const { key } = yield call(ConsumersTransforms.deleteRecord, payload);

      if (key === payload.key) {
        yield put(ConsumersActions.getRecords());
      }
    },
    *editRecord(action, effects) {
      const { payload } = action;
      const { call } = effects;

      const { key } = yield call(ConsumersTransforms.editRecord, payload);

      if (hasString(key)) {
        history.push('/dashboard/consumers');
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
        record = yield call(ConsumersTransforms.getRecord, payload);
      } catch (error) {
        history.push('/dashboard/consumers');
      }

      yield put(StateAt({ record }));
    },
  },
  reducers: setStateReducer,
};
