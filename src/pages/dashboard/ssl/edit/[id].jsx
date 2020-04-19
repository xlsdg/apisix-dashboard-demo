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

import { generateLoadingSelectorByFilter } from '@/redux/actions';
import { createStateSelector, createLoadingSelector, dispatches as SslDispatches } from '@/redux/actions/ssl';

import { hasPlainObject, getValue } from '@/utils/helper';

import styles from './[id].less';

const Header = React.memo(props => {
  const { recordKey } = props;
  const { formatMessage } = useIntl();

  const left = (
    <Breadcrumb>
      <Breadcrumb.Item href="/dashboard">
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/ssl">{formatMessage({ id: 'dashboard.ssl.menu' })}</Breadcrumb.Item>
      <Breadcrumb.Item>{formatMessage({ id: `dashboard.ssl.${recordKey === '0' ? 'new' : 'edit'}` })}</Breadcrumb.Item>
    </Breadcrumb>
  );

  const right = null;
  return <Average left={left} right={right} />;
});

const Content = React.memo(props => {
  const { loading, recordKey, state, addRecord, editRecord } = props;

  return (
    <div className={styles.container}>
      <Block>
        <Header recordKey={recordKey} />
        {loading.getRecord ? (
          <Skeleton className={styles.form} active />
        ) : (
          <Form
            className={styles.form}
            loading={loading.editRecord || loading.addRecord}
            record={state.record}
            onSubmit={hasPlainObject(state.record) ? editRecord : addRecord}
          />
        )}
      </Block>
    </div>
  );
});

Content.propTypes = {};

Content.defaultProps = {};

const [stateSelector, setStateSelector] = createStateSelector('');
const loadingSelector = generateLoadingSelectorByFilter(createLoadingSelector, [
  'addRecord',
  'editRecord',
  'getRecord',
]);

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
    ...SslDispatches(dispatch, ['addRecord', 'editRecord']),
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { match } = ownProps;

  return {
    recordKey: getValue(match, 'params.id'),
    ...stateProps,
    ...dispatchProps,
  };
}

const Page = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Content);

Page.title = 'dashboard.ssl.title';

export default Page;
