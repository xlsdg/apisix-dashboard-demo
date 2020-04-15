import _ from 'lodash';

import NAMESPACES from '@/redux/namespaces';
import PageActions, { generatePutStateAction, generateSelectStateFn, setStateReducer } from '@/redux/actions';

import UpstreamActions from '@/redux/actions/upstream';
import * as UpstreamTransforms from '@/transforms/upstream';

import { generateSubscriptionByRoutes, hasArray } from '@/utils/helper';

const InitialState = {
  records: [],
};

const StateAt = generatePutStateAction(InitialState, 0);
const StateFrom = generateSelectStateFn(InitialState, 0, NAMESPACES.UPSTREAM);

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
      // const { payload } = action;
      const { put } = effects;

      yield put(UpstreamActions.getRecords());
    },
    *changePage(action, effects) {
      // const { payload } = action;
      const { put } = effects;

      yield put(UpstreamActions.getRecords());
    },
    *leavePage(action, effects) {
      // const { payload } = action;
      const { put } = effects;

      yield put(StateAt(_.cloneDeep(InitialState)));
    },
    *getRecords(action, effects) {
      const { payload } = action;
      const { put, call, select } = effects;

      let { records } = yield select(StateFrom);

      if (!hasArray(records)) {
        records = yield call(UpstreamTransforms.getRecords, payload);
      }

      if (hasArray(records)) {
        yield put(StateAt({ records }));
      }
    },
  },
  reducers: setStateReducer,
};
