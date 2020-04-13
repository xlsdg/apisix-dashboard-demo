import React from 'react';
import { connect } from 'umi';
// import { formatMessage } from 'umi';
import { Button } from 'antd';

import { createUserStateSelector } from '@/redux/actions/user';

import styles from './index.less';

const Content = React.memo(props => {
  const { setState } = props;
  console.log(props);
  return (
    <div className={styles.container}>
      <Button onClick={() => setState({ banner: [1] })}>User</Button>
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

Page.title = 'page.user.title';

export default Page;
