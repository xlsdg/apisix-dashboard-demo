import _ from 'lodash';
import React from 'react';

import { hasValue, getValue, mergeObject, isEqual, isPrimitive } from '@/utils/helper';

export function useDeepCompareEffect(effect, deps, depsEqual = isEqual) {
  if (process.env.NODE_ENV !== 'production') {
    if (!(deps instanceof Array) || !deps.length) {
      console.warn('`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
    }

    if (_.every(deps, isPrimitive)) {
      console.warn(
        '`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.'
      );
    }

    if (typeof depsEqual !== 'function') {
      console.warn('`useDeepCompareEffect` should be used with depsEqual callback for comparing deps list');
    }
  }

  const ref = React.useRef(undefined);

  if (!ref.current || !depsEqual(deps, ref.current)) {
    ref.current = deps;
  }

  React.useEffect(effect, ref.current);
}

function initialState(config) {
  return {
    config,
    loading: false,
    response: null,
    error: null,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return mergeObject({}, state, {
        loading: true,
        response: getValue(state, 'config.resetResponseBeforeFetch', true) ? null : state.response,
        error: null,
      });
    case 'FETCH_SUCCESS':
      return mergeObject({}, state, {
        loading: false,
        response: action.payload,
      });
    case 'FETCH_FAILURE':
      return mergeObject({}, state, {
        loading: false,
        error: action.payload,
      });
    default:
      throw new Error('Bad Action Type!');
  }
}

export function useFetch(props = {}) {
  const { config } = props;

  const cancelRef = React.useRef(null);

  const [state, dispatch] = React.useReducer(reducer, config, initialState);

  const fetch = React.useCallback((api, data, options) => {
    const dataOptions = mergeObject({}, options, {
      cancelToken: c => {
        cancelRef.current = c;
      },
    });

    dispatch({ type: 'FETCH_INIT' });

    return api(data, dataOptions)
      .then(resp => {
        if (!hasValue(cancelRef.current)) {
          return Promise.reject(new Error('Fetch canceled!'));
        }
        cancelRef.current = null;

        dispatch({ type: 'FETCH_SUCCESS', payload: resp });
        return resp;
      })
      .catch(err => {
        if (!hasValue(cancelRef.current)) {
          return Promise.reject(new Error('Fetch canceled!'));
        }
        cancelRef.current = null;

        dispatch({ type: 'FETCH_FAILURE', payload: err });
        return Promise.reject(err);
      });
  }, []);

  React.useEffect(() => {
    return () => {
      if (_.isFunction(cancelRef.current)) {
        cancelRef.current();
      }
      cancelRef.current = null;
    };
  }, []);

  return {
    ...state,
    fetch,
  };
}

export function useAutoFetch(props = {}) {
  const { api, data, options, config } = props;

  const [state, dispatch] = React.useReducer(reducer, config, initialState);

  useDeepCompareEffect(() => {
    // console.log('componentDidMount!');
    let cancelToken = null;
    const dataOptions = mergeObject({}, options, {
      cancelToken: c => {
        cancelToken = c;
      },
    });

    dispatch({ type: 'FETCH_INIT' });

    api(data, dataOptions)
      .then(resp => {
        if (!hasValue(cancelToken)) {
          return Promise.reject(new Error('Fetch canceled!'));
        }
        cancelToken = null;

        dispatch({ type: 'FETCH_SUCCESS', payload: resp });
        return resp;
      })
      .catch(err => {
        if (!hasValue(cancelToken)) {
          return Promise.reject(new Error('Fetch canceled!'));
        }
        cancelToken = null;

        dispatch({ type: 'FETCH_FAILURE', payload: err });
        // return Promise.reject(err);
        return err;
      });

    return () => {
      // console.log('componentWillUnmount!');
      if (_.isFunction(cancelToken)) {
        cancelToken();
      }
      cancelToken = null;
    };
  }, [api, data, options]);

  return state;
}
