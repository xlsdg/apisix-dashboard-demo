// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { connect, useIntl } from 'umi';
// import {  } from 'antd';

import Form from '@/components/User/Login/Form';

import { createUserStateSelector, dispatches as UserDispatches } from '@/redux/actions/user';

import { getValue } from '@/utils/helper';

import styles from './index.less';

const Content = React.memo(props => {
  const { login: onLogin } = props;

  const { formatMessage } = useIntl();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{formatMessage({ id: 'page.title' })}</h1>
      <Form onSubmit={onLogin} />
    </div>
  );
});

Content.propTypes = {};

Content.defaultProps = {};

const [stateSelector, setStateSelector] = createUserStateSelector('');

function mapStateToProps(state, ownProps) {
  return {
    loading: state.loading,
    state: stateSelector(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { location } = ownProps;

  const extra = {
    login: {
      redirect: getValue(location, 'query.redirect'),
    },
  };

  return {
    // dispatch, // 默认不打开，在这个函数里处理 dispatch
    setState: setStateSelector(dispatch),
    ...UserDispatches(dispatch, ['login'], extra),
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  // const { location } = ownProps;
  return {
    ...stateProps,
    ...dispatchProps,
  };
}

const Page = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Content);

Page.title = 'user.login.title';

export default Page;
