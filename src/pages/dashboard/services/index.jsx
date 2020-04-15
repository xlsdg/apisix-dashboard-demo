// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { connect } from 'umi';
// import {  } from 'antd';

import Block from '@/components/Dashboard/Block';
import Table from '@/components/Dashboard/Services/Table';

import NAMESPACES from '@/redux/namespaces';
import SERVICES_TYPES from '@/redux/types/services';
import { createServicesStateSelector } from '@/redux/actions/services';

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

  const fetching = getValue(loading, `effects['${NAMESPACES.SERVICES}/${SERVICES_TYPES.GET_RECORDS}']`, false);
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

const [stateSelector, setStateSelector] = createServicesStateSelector('');

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

Page.title = 'page.services.title';

export default Page;
