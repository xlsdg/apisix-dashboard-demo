import _ from 'lodash';

import NAMESPACES from '@/redux/namespaces';
import PageActions, { generatePutStateAction, setStateReducer } from '@/redux/actions';

import ConsumersActions from '@/redux/actions/consumers';
import * as ConsumersTransforms from '@/transforms/consumers';

import { generateSubscriptionByRoutes, hasArray } from '@/utils/helper';

const InitialState = {
  records: [],
};

const StateAt = generatePutStateAction(InitialState, 0);
// const StateFrom = generateSelectStateFn(InitialState, 0, NAMESPACES.CONSUMERS);

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
      // const { payload } = action;
      const { put } = effects;

      yield put(ConsumersActions.getRecords());
    },
    *changePage(action, effects) {
      // const { payload } = action;
      const { put } = effects;

      yield put(ConsumersActions.getRecords());
    },
    *leavePage(action, effects) {
      // const { payload } = action;
      const { put } = effects;

      yield put(StateAt(_.cloneDeep(InitialState)));
    },
    *getRecords(action, effects) {
      // const { payload } = action;
      const { put, call } = effects;

      // console.log(payload);
      const resp = yield call(ConsumersTransforms.getRecords, {});
      // console.log(resp);
      if (hasArray(resp.records)) {
        yield put(StateAt({ records: resp.records }));
      }
    },
  },
  reducers: setStateReducer,
};
