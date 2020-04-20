// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { connect, history, useIntl } from 'umi';
import { Breadcrumb, Button } from 'antd';
import { HomeOutlined, PlusOutlined } from '@ant-design/icons';

import Block from '@/components/Dashboard/Block';
import Average from '@/components/Dashboard/Average';
import Table from '@/components/Dashboard/Upstream/Table';

import { generateLoadingSelectorByFilter } from '@/redux/actions';
import { createStateSelector, createLoadingSelector } from '@/redux/actions/upstream';

import styles from './index.less';

const Header = React.memo(props => {
  // const {} = props;
  const { formatMessage } = useIntl();

  const left = (
    <Breadcrumb>
      <Breadcrumb.Item href="/dashboard">
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item>{formatMessage({ id: 'dashboard.upstream.menu' })}</Breadcrumb.Item>
    </Breadcrumb>
  );

  const handleClick = React.useCallback(() => history.push('/dashboard/upstream/add'), []);
  const right = (
    <Button type="primary" onClick={handleClick}>
      <PlusOutlined />
      {` ${formatMessage({ id: 'dashboard.upstream.new' })}`}
    </Button>
  );

  return <Average left={left} right={right} />;
});

const Content = React.memo(props => {
  const { loading, state } = props;

  return (
    <div className={styles.container}>
      <Block>
        <Header />
        <Table loading={loading.getRecords || loading.deleteRecord} dataSource={state.records} />
      </Block>
    </div>
  );
});

Content.propTypes = {};

Content.defaultProps = {};

const [stateSelector, setStateSelector] = createStateSelector('');
const loadingSelector = generateLoadingSelectorByFilter(createLoadingSelector, ['getRecords', 'deleteRecord']);

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

Page.title = 'dashboard.upstream.title';

export default Page;
