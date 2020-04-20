// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { connect, useIntl } from 'umi';
import { Breadcrumb, Skeleton } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import Block from '@/components/Dashboard/Block';
import Average from '@/components/Dashboard/Average';
import Form from '@/components/Dashboard/Routes/Form';

import { generateLoadingSelectorByFilter } from '@/redux/actions';
import { createStateSelector, createLoadingSelector, dispatches as RoutesDispatches } from '@/redux/actions/routes';

import styles from './[id].less';

const Header = React.memo(props => {
  // const {  } = props;

  const { formatMessage } = useIntl();

  const left = (
    <Breadcrumb>
      <Breadcrumb.Item href="/dashboard">
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/routes">{formatMessage({ id: 'dashboard.routes.menu' })}</Breadcrumb.Item>
      <Breadcrumb.Item>{formatMessage({ id: 'dashboard.routes.edit' })}</Breadcrumb.Item>
    </Breadcrumb>
  );

  const right = null;
  return <Average left={left} right={right} />;
});

const Content = React.memo(props => {
  const { loading, state, editRecord } = props;

  return (
    <div className={styles.container}>
      <Block>
        <Header />
        {loading.getRecord ? (
          <Skeleton className={styles.form} active />
        ) : (
          <Form className={styles.form} loading={loading.editRecord} record={state.record} onSubmit={editRecord} />
        )}
      </Block>
    </div>
  );
});

Content.propTypes = {};

Content.defaultProps = {};

const [stateSelector, setStateSelector] = createStateSelector('');
const loadingSelector = generateLoadingSelectorByFilter(createLoadingSelector, ['editRecord', 'getRecord']);

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
    ...RoutesDispatches(dispatch, ['editRecord']),
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  // const {  } = ownProps;

  return {
    ...stateProps,
    ...dispatchProps,
  };
}

const Page = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Content);

Page.title = 'dashboard.routes.title';

export default Page;
