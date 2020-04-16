// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { connect } from 'umi';
// import {  } from 'antd';

import { createStateSelector } from '@/redux/actions/consumers';

import styles from './$id.less';

const Content = React.memo(props => {
  // const {  } = props;
  return <div className={styles.container}>Consumers</div>;
});

Content.propTypes = {};

Content.defaultProps = {};

const [stateSelector, setStateSelector] = createStateSelector('');

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

Page.title = 'dashboard.consumers.title';

export default Page;
