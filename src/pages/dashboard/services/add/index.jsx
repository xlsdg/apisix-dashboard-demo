// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { connect, useIntl } from 'umi';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import Block from '@/components/Dashboard/Block';
import Average from '@/components/Dashboard/Average';
import Form from '@/components/Dashboard/Services/Form';

// import { generateLoadingSelectorByFilter } from '@/redux/actions';
import { createLoadingSelector, dispatches as ServicesDispatches } from '@/redux/actions/services';

import styles from './index.less';

const Header = React.memo(props => {
  // const {  } = props;

  const { formatMessage } = useIntl();

  const left = (
    <Breadcrumb>
      <Breadcrumb.Item href="/dashboard">
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/services">{formatMessage({ id: 'dashboard.services.menu' })}</Breadcrumb.Item>
      <Breadcrumb.Item>{formatMessage({ id: 'dashboard.services.new' })}</Breadcrumb.Item>
    </Breadcrumb>
  );

  const right = null;
  return <Average left={left} right={right} />;
});

function Body(props) {
  const { loading, addRecord } = props;

  return (
    <div className={styles.container}>
      <Block>
        <Header />
        <Form className={styles.form} loading={loading} onSubmit={addRecord} />
      </Block>
    </div>
  );
}

Body.propTypes = {};

Body.defaultProps = {};

// const [stateSelector, setStateSelector] = createStateSelector('');
const loadingSelector = createLoadingSelector['addRecord'];

function mapStateToProps(state, ownProps) {
  return {
    loading: loadingSelector(state.loading),
    // state: stateSelector(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // dispatch, // 默认不打开，在这个函数里处理 dispatch
    // setState: setStateSelector(dispatch),
    ...ServicesDispatches(dispatch, ['addRecord']),
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

Page.title = 'dashboard.services.title';

export default Page;
