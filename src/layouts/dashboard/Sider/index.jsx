import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { Link, history, useIntl, useLocation } from 'umi';
import { Layout, Menu } from 'antd';
// import { formatMessage } from 'umi';
import {
  ClusterOutlined,
  ShoppingCartOutlined,
  NodeIndexOutlined,
  LockOutlined,
  ToTopOutlined,
} from '@ant-design/icons';

import ImgLogo from '@/assets/logo.png';

import styles from './index.less';

const Logo = React.memo(props => {
  const { collapsed } = props;

  const { formatMessage } = useIntl();
  const title = collapsed ? null : <h1 className={styles.title}>{formatMessage({ id: 'page.title' })}</h1>;

  return (
    <div className={styles.logo}>
      <Link className={styles.link} to="/">
        <img className={styles.image} src={ImgLogo} alt="logo" />
        {title}
      </Link>
    </div>
  );
});

const Sider = React.memo(props => {
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

  const handleMenuClick = React.useCallback(props => history.push(`/dashboard/${props.key}`), []);

  const location = useLocation();
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

  const { formatMessage } = useIntl();
  const menus = React.useMemo(() => {
    const items = [
      {
        key: 'routes',
        icon: <ClusterOutlined />,
        text: formatMessage({ id: 'dashboard.routes.menu' }),
      },
      {
        key: 'consumers',
        icon: <ShoppingCartOutlined />,
        text: formatMessage({ id: 'dashboard.consumers.menu' }),
      },
      {
        key: 'services',
        icon: <NodeIndexOutlined />,
        text: formatMessage({ id: 'dashboard.services.menu' }),
      },
      {
        key: 'ssl',
        icon: <LockOutlined />,
        text: formatMessage({ id: 'dashboard.ssl.menu' }),
      },
      {
        key: 'upstream',
        icon: <ToTopOutlined />,
        text: formatMessage({ id: 'dashboard.upstream.menu' }),
      },
    ];

    return _.map(items, item => (
      <Menu.Item key={item.key}>
        {item.icon}
        <span>{item.text}</span>
      </Menu.Item>
    ));
  }, [formatMessage]);

  return (
    <Layout.Sider className={styles.sider} {...siderProps}>
      <Logo collapsed={collapsed} />
      <Menu className={styles.menu} {...menuProps}>
        {menus}
      </Menu>
    </Layout.Sider>
  );
});

Sider.propTypes = {};

Sider.defaultProps = {};

export default Sider;
