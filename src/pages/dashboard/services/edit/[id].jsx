// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { connect, useIntl } from 'umi';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import Block from '@/components/Dashboard/Block';
import Average from '@/components/Dashboard/Average';

import { generateLoadingSelectorByFilter } from '@/redux/actions';
import { createStateSelector, createLoadingSelector } from '@/redux/actions/services';

import { getValue } from '@/utils/helper';

import styles from './[id].less';

const Header = React.memo(props => {
  const { recordKey } = props;
  const { formatMessage } = useIntl();

  const left = (
    <Breadcrumb>
      <Breadcrumb.Item href="/dashboard">
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/services">{formatMessage({ id: 'dashboard.services.menu' })}</Breadcrumb.Item>
      <Breadcrumb.Item>
        {formatMessage({ id: `dashboard.services.${recordKey === '0' ? 'new' : 'edit'}` })}
      </Breadcrumb.Item>
    </Breadcrumb>
  );

  const right = null;
  return <Average left={left} right={right} />;
});

const Content = React.memo(props => {
  const { recordKey } = props;

  return (
    <div className={styles.container}>
      <Block>
        <Header recordKey={recordKey} />
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

Page.title = 'dashboard.services.title';

export default Page;
