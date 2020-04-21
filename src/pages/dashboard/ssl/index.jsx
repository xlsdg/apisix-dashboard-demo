// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { connect, history, useIntl } from 'umi';
import { Breadcrumb, Button } from 'antd';
import { HomeOutlined, PlusOutlined } from '@ant-design/icons';

import Block from '@/components/Dashboard/Block';
import Average from '@/components/Dashboard/Average';
import Table from '@/components/Dashboard/SSL/Table';

import { createStateSelector, createDispatchSelector } from '@/redux/actions/ssl';

import styles from './index.less';

const Header = React.memo(props => {
  // const {} = props;
  const { formatMessage } = useIntl();

  const left = (
    <Breadcrumb>
      <Breadcrumb.Item href="/dashboard">
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item>{formatMessage({ id: 'dashboard.ssl.menu' })}</Breadcrumb.Item>
    </Breadcrumb>
  );

  const handleClick = React.useCallback(() => history.push('/dashboard/ssl/add'), []);
  const right = (
    <Button type="primary" onClick={handleClick}>
      <PlusOutlined />
      {` ${formatMessage({ id: 'dashboard.ssl.new' })}`}
    </Button>
  );

  return <Average left={left} right={right} />;
});

function Body(props) {
  const { loading, state } = props;

  return (
    <div className={styles.container}>
      <Block>
        <Header />
        <Table loading={loading['getRecords'] || loading['deleteRecord']} dataSource={state.records} />
      </Block>
    </div>
  );
}

// Body.propTypes = {};

Body.defaultProps = {};

const [stateSelector, setStateSelector] = createStateSelector('');
const [dispatchSelector, loadingSelector] = createDispatchSelector(['getRecords', 'deleteRecord']);

function mapStateToProps(state, ownProps) {
  return {
    state: stateSelector(state),
    loading: loadingSelector(state.loading),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // dispatch, // 默认不打开，在这个函数里处理 dispatch
    setState: setStateSelector(dispatch),
    ...dispatchSelector(dispatch),
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  // const { location } = ownProps;

  return {
    ...stateProps,
    // ...dispatchProps,
  };
}

const Page = connect(mapStateToProps, mapDispatchToProps, mergeProps)(React.memo(Body));

Page.title = 'dashboard.ssl.title';

export default Page;
