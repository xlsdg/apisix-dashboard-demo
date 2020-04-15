// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { connect } from 'umi';
// import {  } from 'antd';

import Block from '@/components/Dashboard/Block';
import Table from '@/components/Dashboard/Routes/Table';

import NAMESPACES from '@/redux/namespaces';
import ROUTES_TYPES from '@/redux/types/routes';
import { createRoutesStateSelector } from '@/redux/actions/routes';

import { getValue } from '@/utils/helper';

import styles from './index.less';

const Header = React.memo(props => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>123</div>
      <div className={styles.right}>456</div>
    </div>
  );
});

const Content = React.memo(props => {
  const { loading, state } = props;

  const fetching = getValue(loading, `effects['${NAMESPACES.ROUTES}/${ROUTES_TYPES.GET_RECORDS}']`, false);
  return (
    <div className={styles.container}>
      <Block>
        <Header />
        <Table loading={fetching} dataSource={state.records} />
      </Block>
    </div>
  );
});

Content.propTypes = {};

Content.defaultProps = {};

const [stateSelector, setStateSelector] = createRoutesStateSelector('');

function mapStateToProps(state, ownProps) {
  return {
    loading: state.loading,
    state: stateSelector(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // dispatch, // 默认不打开，在这个函数里处理 dispatch
    setState: setStateSelector(dispatch),
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

Page.title = 'page.routes.title';

export default Page;
