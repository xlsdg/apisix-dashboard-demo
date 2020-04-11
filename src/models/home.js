import _ from 'lodash';

import NAMESPACES from '@/redux/namespaces';
import PageActions, { generatePutStateAction, setStateReducer } from '@/redux/actions';

import HomeActions from '@/redux/actions/home';
import HomeApi from '@/services/home';

import { generateSubscriptionByRoutes, hasArray } from '@/utils/helper';

const InitialState = {
  banner: [],
};

const StateAt = generatePutStateAction(InitialState, 0);
// const StateFrom = generateSelectStateFn(InitialState, 0, NAMESPACES.HOME);

const Routes = {
  '/': {
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
  namespace: NAMESPACES.HOME,
  state: _.cloneDeep(InitialState),
  subscriptions: {
    setup: generateSubscriptionByRoutes(Routes),
  },
  effects: {
    *enterPage(action, effects) {
      // const { payload } = action;
      const { put } = effects;

      yield put(HomeActions.getData());
    },
    *changePage(action, effects) {
      // const { payload } = action;
      const { put } = effects;

      yield put(HomeActions.getData());
    },
    *leavePage(action, effects) {
      // const { payload } = action;
      const { put } = effects;

      yield put(StateAt(_.cloneDeep(InitialState)));
    },
    *getData(action, effects) {
      // const { payload } = action;
      const { put, call } = effects;

      // console.log(payload);
      const resp = yield call(HomeApi.getData, {});
      // console.log(resp);
      if (hasArray(resp.banner)) {
        yield put(StateAt({ banner: resp.banner }));
      }
    },
  },
  reducers: setStateReducer,
};
