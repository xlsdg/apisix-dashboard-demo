// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
// import { Link, history, Redirect } from 'umi';
import { Layout } from 'antd';
// import { formatMessage } from 'umi';

import styles from './index.less';

const DashboardLayout = React.memo(props => {
  const { children } = props;

  return (
    <Layout className={styles.container}>
      <Layout.Content className={styles.content}>{children}</Layout.Content>
    </Layout>
  );
});

DashboardLayout.propTypes = {};

DashboardLayout.defaultProps = {};

export default DashboardLayout;
