// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { connect, useIntl } from 'umi';
// import {  } from 'antd';

import Form from '@/components/User/Login/Form';

import { createDispatchSelector } from '@/redux/actions/user';

import { getValue } from '@/utils/helper';

import styles from './index.less';

function Body(props) {
  const { loading, redirect, login } = props;

  const { formatMessage } = useIntl();

  const handleSubmit = React.useCallback(values => login({ ...values, redirect }), [login, redirect]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{formatMessage({ id: 'page.title' })}</h1>
      <Form loading={loading['login']} onSubmit={handleSubmit} />
    </div>
  );
}

// Body.propTypes = {};

Body.defaultProps = {};

// const [stateSelector, setStateSelector] = createUserStateSelector('');
const [dispatchSelector, loadingSelector] = createDispatchSelector(['login']);

function mapStateToProps(state, ownProps) {
  return {
    // state: stateSelector(state),
    loading: loadingSelector(state.loading),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // dispatch, // 默认不打开，在这个函数里处理 dispatch
    // setState: setStateSelector(dispatch),
    ...dispatchSelector(dispatch),
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { location } = ownProps;

  return {
    redirect: getValue(location, 'query.redirect'),
    ...stateProps,
    ...dispatchProps,
  };
}

const Page = connect(mapStateToProps, mapDispatchToProps, mergeProps)(React.memo(Body));

Page.title = 'user.login.title';

export default Page;
