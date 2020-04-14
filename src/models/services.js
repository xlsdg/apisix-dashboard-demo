import _ from 'lodash';

import NAMESPACES from '@/redux/namespaces';
import PageActions, { generatePutStateAction, setStateReducer } from '@/redux/actions';

import ServicesActions from '@/redux/actions/services';
import * as ServicesTransforms from '@/transforms/services';

import { generateSubscriptionByRoutes, hasArray } from '@/utils/helper';

const InitialState = {
  records: [],
};

const StateAt = generatePutStateAction(InitialState, 0);
// const StateFrom = generateSelectStateFn(InitialState, 0, NAMESPACES.SERVICES);

const Routes = {
  '/dashboard/services': {
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
  namespace: NAMESPACES.SERVICES,
  state: _.cloneDeep(InitialState),
  subscriptions: {
    setup: generateSubscriptionByRoutes(Routes),
  },
  effects: {
    *enterPage(action, effects) {
      // const { payload } = action;
      const { put } = effects;

      yield put(ServicesActions.getRecords());
    },
    *changePage(action, effects) {
      // const { payload } = action;
      const { put } = effects;

      yield put(ServicesActions.getRecords());
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
      const resp = yield call(ServicesTransforms.getRecords, {});
      // console.log(resp);
      if (hasArray(resp.records)) {
        yield put(StateAt({ records: resp.records }));
      }
    },
  },
  reducers: setStateReducer,
};
