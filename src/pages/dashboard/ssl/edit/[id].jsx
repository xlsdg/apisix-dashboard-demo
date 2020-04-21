// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { connect, useIntl } from 'umi';
import { Breadcrumb, Skeleton } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import Block from '@/components/Dashboard/Block';
import Average from '@/components/Dashboard/Average';
import Form from '@/components/Dashboard/SSL/Form';

import { createStateSelector, createDispatchSelector } from '@/redux/actions/ssl';

import styles from './[id].less';

const Header = React.memo(props => {
  // const {  } = props;

  const { formatMessage } = useIntl();

  const left = (
    <Breadcrumb>
      <Breadcrumb.Item href="/dashboard">
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/ssl">{formatMessage({ id: 'dashboard.ssl.menu' })}</Breadcrumb.Item>
      <Breadcrumb.Item>{formatMessage({ id: 'dashboard.ssl.edit' })}</Breadcrumb.Item>
    </Breadcrumb>
  );

  const right = null;
  return <Average left={left} right={right} />;
});

function Body(props) {
  const { loading, state, editRecord } = props;

  return (
    <div className={styles.container}>
      <Block>
        <Header />
        {loading['getRecord'] ? (
          <Skeleton className={styles.form} active />
        ) : (
          <Form className={styles.form} loading={loading['editRecord']} record={state.record} onSubmit={editRecord} />
        )}
      </Block>
    </div>
  );
}

// Body.propTypes = {};

Body.defaultProps = {};

const [stateSelector, setStateSelector] = createStateSelector();
const [dispatchSelector, loadingSelector] = createDispatchSelector(['editRecord', 'getRecord']);

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
  // const {  } = ownProps;

  return {
    ...stateProps,
    ...dispatchProps,
  };
}

const Page = connect(mapStateToProps, mapDispatchToProps, mergeProps)(React.memo(Body));

Page.title = 'dashboard.ssl.title';

export default Page;
