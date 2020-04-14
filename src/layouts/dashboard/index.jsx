import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { Link, history, useIntl } from 'umi';
import { Layout, Menu } from 'antd';
// import { formatMessage } from 'umi';
import {
  ClusterOutlined,
  ShoppingCartOutlined,
  NodeIndexOutlined,
  LockOutlined,
  ToTopOutlined,
} from '@ant-design/icons';

import PrivatePage from '@/components/PrivatePage';

import { isLoggedIn } from '@/utils/store';

import ImgLogo from '@/assets/logo.png';

import styles from './index.less';

const DashboardSider = React.memo(props => {
  const { location } = props;

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

  const handleMenuClick = React.useCallback(props => history.push(`/dashboard/${props.key}`), []);

  const selectedKeys = React.useMemo(() => [_.split(location.pathname, '/')[2]], [location.pathname]);
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
    selectedKeys,
    // subMenuCloseDelay: ,
    // subMenuOpenDelay: ,
    theme: 'dark',
    onClick: handleMenuClick,
    // onDeselect: ,
    // onOpenChange: ,
    // onSelect: ,
    // overflowedIndicator: ,
  };

  const intl = useIntl();
  const title = collapsed ? null : <span className={styles.title}>{intl.formatMessage({ id: 'page.title' })}</span>;

  const menus = React.useMemo(() => {
    const items = [
      {
        key: 'routes',
        icon: <ClusterOutlined />,
        text: 'Routes',
      },
      {
        key: 'consumers',
        icon: <ShoppingCartOutlined />,
        text: 'Consumers',
      },
      {
        key: 'services',
        icon: <NodeIndexOutlined />,
        text: 'Services',
      },
      {
        key: 'ssl',
        icon: <LockOutlined />,
        text: 'SSL',
      },
      {
        key: 'upstream',
        icon: <ToTopOutlined />,
        text: 'Upstream',
      },
    ];

    return _.map(items, item => (
      <Menu.Item key={item.key}>
        {item.icon}
        <span>{item.text}</span>
      </Menu.Item>
    ));
  }, []);

  return (
    <Layout.Sider className={styles.sider} {...siderProps}>
      <div className={styles.logo}>
        <Link className={styles.link} to="/">
          <img className={styles.image} src={ImgLogo} alt="logo" />
          {title}
        </Link>
      </div>
      <Menu className={styles.menu} {...menuProps}>
        {menus}
      </Menu>
    </Layout.Sider>
  );
});

const DashboardHeader = React.memo(props => {
  return <Layout.Header className={styles.header}>123</Layout.Header>;
});

const DashboardLayout = React.memo(props => {
  const { children, location } = props;

  const loginUri = `/user/login?redirect_uri=${window.encodeURIComponent(window.location.href)}`;
  return (
    <PrivatePage authority={isLoggedIn} errTo="/403" authTo={loginUri}>
      <Layout className={styles.container}>
        <DashboardSider location={location} />
        <Layout className={styles.body}>
          <DashboardHeader />
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
