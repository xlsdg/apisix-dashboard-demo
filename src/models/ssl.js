import _ from 'lodash';
import { history } from 'umi';

import NAMESPACES from '@/redux/namespaces';
import PageActions, { generatePutStateAction, generateSelectStateFn, setStateReducer } from '@/redux/actions';

import SslActions from '@/redux/actions/ssl';
import * as SslTransforms from '@/transforms/ssl';

import { generateSubscriptionByRoutes, hasArray, hasString } from '@/utils/helper';

const InitialState = {
  records: [],
  record: {},
};

const StateAt = generatePutStateAction(InitialState, 0);
const StateFrom = generateSelectStateFn(InitialState, 0, NAMESPACES.SSL);

const Routes = {
  '/dashboard/ssl': {
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
  '/dashboard/ssl/edit/:id': {
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
  namespace: NAMESPACES.SSL,
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

      if (match[0] === '/dashboard/ssl') {
        yield put(SslActions.getRecords());
        return;
      }

      if (_.startsWith(match[0], '/dashboard/ssl/edit/') && match.length === 2) {
        yield put(SslActions.getRecord({ key: match[1] }));
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

      if (match[0] === '/dashboard/ssl') {
        yield put(SslActions.getRecords());
        return;
      }

      if (_.startsWith(match[0], '/dashboard/ssl/edit/') && match.length === 2) {
        yield put(SslActions.getRecord({ key: match[1] }));
        return;
      }
    },
    *leavePage(action, effects) {
      // const { payload } = action;
      const { put } = effects;

      yield put(StateAt(_.cloneDeep(InitialState)));
    },
    *getRecords(action, effects) {
      const { payload } = action;
      const { put, call } = effects;

      const records = yield call(SslTransforms.getRecords, payload);

      yield put(StateAt({ records }));
    },
    *addRecord(action, effects) {
      const { payload } = action;
      const { call } = effects;

      const { key } = yield call(SslTransforms.addRecord, payload);

      if (hasString(key)) {
        history.push('/dashboard/ssl');
      }
    },
    *deleteRecord(action, effects) {
      const { payload } = action;
      const { put, call } = effects;

      const { key } = yield call(SslTransforms.deleteRecord, payload);

      if (key === payload.key) {
        yield put(SslActions.getRecords());
      }
    },
    *editRecord(action, effects) {
      const { payload } = action;
      const { call } = effects;

      const { key } = yield call(SslTransforms.editRecord, payload);

      if (hasString(key)) {
        history.push('/dashboard/ssl');
      }
    },
    *getRecord(action, effects) {
      const { payload } = action;
      const { put, call, select } = effects;

      // 新建
      if (payload.key === '0') {
        return;
      }

      let { record } = yield select(StateFrom);

      try {
        record = yield call(SslTransforms.getRecord, payload);
      } catch (error) {
        history.push('/dashboard/ssl');
      }

      yield put(StateAt({ record }));
    },
  },
  reducers: setStateReducer,
};
