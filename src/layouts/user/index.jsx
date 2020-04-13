// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
// import { Link, history, Redirect } from 'umi';
import { Layout } from 'antd';
// import { formatMessage } from 'umi';

import AuthPage from '@/components/AuthPage';

import styles from './index.less';

const UserLayout = React.memo(props => {
  const { children } = props;

  return (
    <AuthPage errTo="/404" authTo="/dashboard">
      <Layout className={styles.container}>
        <Layout.Content className={styles.content}>{children}</Layout.Content>
      </Layout>
    </AuthPage>
  );
});

UserLayout.propTypes = {};

UserLayout.defaultProps = {};

export default UserLayout;
