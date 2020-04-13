// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
// import { Link, history, Redirect } from 'umi';
import { Layout, Menu } from 'antd';
// import { formatMessage } from 'umi';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

import PrivatePage from '@/components/PrivatePage';

import styles from './index.less';

const DashboardSider = React.memo(props => {
  // const {  } = props;

  const [collapsed, setCollapsed] = React.useState(false);

  const siderProps = {
    // breakpoint: ,
    collapsed,
    // collapsedWidth: ,
    collapsible: true,
    // defaultCollapsed: ,
    // reverseArrow: ,
    theme: 'dark',
    // trigger: ,
    // width: ,
    onCollapse: setCollapsed,
    // onBreakpoint: ,
    // zeroWidthTriggerStyle: ,
  };

  const menuProps = {
    // defaultOpenKeys: ,
    // defaultSelectedKeys: ,
    // forceSubMenuRender: ,
    // inlineCollapsed: ,
    // inlineIndent: ,
    mode: 'inline',
    // multiple: ,
    // openKeys: ,
    // selectable: ,
    // selectedKeys: ,
    // subMenuCloseDelay: ,
    // subMenuOpenDelay: ,
    theme: 'dark',
    // onClick: ,
    // onDeselect: ,
    // onOpenChange: ,
    // onSelect: ,
    // overflowedIndicator: ,
  };

  return (
    <Layout.Sider className={styles.sider} {...siderProps}>
      <div className="logo" />
      <Menu className={styles.menu} {...menuProps}>
        <Menu.Item key="1">
          <UserOutlined />
          <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <VideoCameraOutlined />
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <UploadOutlined />
          <span>nav 3</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
});

const DashboardLayout = React.memo(props => {
  const { children } = props;

  const loginUri = `/user/login?redirect_uri=${window.encodeURIComponent(window.location.href)}`;
  return (
    <PrivatePage errTo="/404" authTo={loginUri}>
      <Layout className={styles.container}>
        <DashboardSider />
        <Layout className={styles.body}>
          <Layout.Header className={styles.header}>123</Layout.Header>
          <Layout.Content className={styles.content}>{children}</Layout.Content>
          <Layout.Footer className={styles.footer}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
        </Layout>
      </Layout>
    </PrivatePage>
  );
});

DashboardLayout.propTypes = {};

DashboardLayout.defaultProps = {};

export default DashboardLayout;
