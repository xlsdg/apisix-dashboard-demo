// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
// import { Link, history, useIntl } from 'umi';
import { Layout } from 'antd';
// import { formatMessage } from 'umi';

import PrivatePage from '@/components/PrivatePage';
import Sider from './Sider';
import Header from './Header';

import { isLoggedIn } from '@/utils/store';

import styles from './index.less';

const DashboardLayout = React.memo(props => {
  const { children, location } = props;

  const loginUri = `/user/login?redirect=${window.encodeURIComponent(window.location.href)}`;
  return (
    <PrivatePage authority={isLoggedIn} errTo="/403" authTo={loginUri}>
      <Layout className={styles.container}>
        <Sider location={location} />
        <Layout className={styles.body}>
          <Header location={location} />
          <Layout.Content className={styles.content}>{children}</Layout.Content>
          <Layout.Footer className={styles.footer}>APISIX ©2020 Created by iResty</Layout.Footer>
        </Layout>
      </Layout>
    </PrivatePage>
  );
});

DashboardLayout.propTypes = {};

DashboardLayout.defaultProps = {};

export default DashboardLayout;
