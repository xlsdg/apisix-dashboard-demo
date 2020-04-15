// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { connect } from 'umi';
// import {  } from 'antd';

import Block from '@/components/Dashboard/Block';
import Average from '@/components/Dashboard/Average';
import Table from '@/components/Dashboard/SSL/Table';

import { createStateSelector, createLoadingSelector } from '@/redux/actions/ssl';

import styles from './index.less';

const Header = React.memo(props => {
  const title = <span>SSL</span>;
  const btn = '456';

  return <Average left={title} right={btn} />;
});

const Content = React.memo(props => {
  const { loading, state } = props;

  return (
    <div className={styles.container}>
      <Block>
        <Header />
        <Table loading={loading} dataSource={state.records} />
      </Block>
    </div>
  );
});

Content.propTypes = {};

Content.defaultProps = {};

const [stateSelector, setStateSelector] = createStateSelector('');
const loadingSelector = createLoadingSelector['getRecords'];

function mapStateToProps(state, ownProps) {
  return {
    loading: loadingSelector(state.loading),
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

Page.title = 'page.ssl.title';

export default Page;
