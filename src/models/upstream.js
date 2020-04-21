import _ from 'lodash';
import { history } from 'umi';

import NAMESPACES from '@/redux/namespaces';
import PageActions, { generatePutStateAction, generateEffectStateSelector, setStateReducer } from '@/redux/actions';

import UpstreamActions from '@/redux/actions/upstream';
import * as UpstreamTransforms from '@/transforms/upstream';

import { generateSubscriptionByRoutes, hasArray, hasString, hasPlainObject } from '@/utils/helper';

const InitialState = {
  records: [],
  record: {},
};

const StateAt = generatePutStateAction(InitialState, 0);
const StateFrom = generateEffectStateSelector(InitialState, 0, NAMESPACES.UPSTREAM);

const Routes = {
  '/dashboard/upstream': {
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
  '/dashboard/upstream/edit/:id': {
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
  namespace: NAMESPACES.UPSTREAM,
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

      if (match[0] === '/dashboard/upstream') {
        yield put(UpstreamActions.getRecords());
        return;
      }

      if (_.startsWith(match[0], '/dashboard/upstream/edit/') && match.length === 2) {
        yield put(UpstreamActions.getRecord({ key: match[1] }));
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

      if (match[0] === '/dashboard/upstream') {
        yield put(UpstreamActions.getRecords());
        return;
      }

      if (_.startsWith(match[0], '/dashboard/upstream/edit/') && match.length === 2) {
        yield put(UpstreamActions.getRecord({ key: match[1] }));
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

      if (match[0] === '/dashboard/upstream') {
        // yield put(StateAt({ records: [] }));
        return;
      }

      if (_.startsWith(match[0], '/dashboard/upstream/edit/') && match.length === 2) {
        yield put(StateAt({ record: {} }));
        return;
      }
    },
    *getRecords(action, effects) {
      const { payload } = action;
      const { put, call } = effects;

      const records = yield call(UpstreamTransforms.getRecords, payload);

      yield put(StateAt({ records }));
    },
    *addRecord(action, effects) {
      const { payload } = action;
      const { call } = effects;

      const { key } = yield call(UpstreamTransforms.addRecord, payload);

      if (hasString(key)) {
        history.push('/dashboard/upstream');
      }
    },
    *deleteRecord(action, effects) {
      const { payload } = action;
      const { put, call } = effects;

      const { key } = yield call(UpstreamTransforms.deleteRecord, payload);

      if (key === payload.key) {
        yield put(UpstreamActions.getRecords());
      }
    },
    *editRecord(action, effects) {
      const { payload } = action;
      const { call } = effects;

      const { key } = yield call(UpstreamTransforms.editRecord, payload);

      if (hasString(key)) {
        history.push('/dashboard/upstream');
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
        record = _.find(records, r => r.key === payload.key);
        if (hasPlainObject(record)) {
          yield put(StateAt({ record }));
          return;
        }
      }

      try {
        record = yield call(UpstreamTransforms.getRecord, payload);
      } catch (error) {
        history.push('/dashboard/upstream');
      }

      yield put(StateAt({ record }));
    },
  },
  reducers: setStateReducer,
};
