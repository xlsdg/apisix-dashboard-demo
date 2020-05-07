import _ from 'lodash';
import { history } from 'umi';

import NAMESPACES from '@/redux/namespaces';
import { PageEvents, setStateReducer } from '@/redux/actions';

import * as UserTransforms from '@/transforms/user';

import { generateSubscriptionByRoutes, hasString } from '@/utils/helper';
import { setToken, removeToken } from '@/utils/store';

const InitialState = {};

// const StateAt = generatePutStateAction(InitialState, 0);
// const StateFrom = generateEffectStateSelector(InitialState, 0, NAMESPACES.USER);

const Routes = {
  '/user/login': PageEvents,
};

// action: error, type, payload, meta
// effects: take, put, all, race, call, apply, cps, fork, spawn, join, cancel, select,
//          actionChannel, cancelled, flush, getContext, setContext, takeEvery, takeLatest, throttle
export default {
  namespace: NAMESPACES.USER,
  state: _.cloneDeep(InitialState),
  subscriptions: {
    setup: generateSubscriptionByRoutes(Routes),
  },
  effects: {
    // *enterPage(action, effects) {
    //   // const { payload } = action;
    //   const { put } = effects;

    //   yield put(UserActions.getData());
    // },
    // *changePage(action, effects) {
    //   // const { payload } = action;
    //   const { put } = effects;

    //   yield put(UserActions.getData());
    // },
    // *leavePage(action, effects) {
    //   // const { payload } = action;
    //   const { put } = effects;

    //   yield put(StateAt(_.cloneDeep(InitialState)));
    // },
    *login(action, effects) {
      const { payload } = action;
      const { call } = effects;

      const resp = yield call(UserTransforms.login, payload);
      if (resp) {
        yield call(setToken, `${_.now()}`);
        if (hasString(payload.redirect)) {
          window.location.href = payload.redirect;
        } else {
          history.push('/dashboard');
        }
      }
    },
    *logout(action, effects) {
      const { payload } = action;
      const { call } = effects;

      const resp = yield call(UserTransforms.logout, payload);
      if (resp) {
        removeToken();
        history.push('/');
      }
    },
  },
  reducers: setStateReducer,
};
