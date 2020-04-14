import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { connect, useIntl } from 'umi';
import { Menu, Dropdown, Avatar } from 'antd';
// import { formatMessage } from 'umi';
import { LogoutOutlined } from '@ant-design/icons';

import { dispatches as UserDispatches } from '@/redux/actions/user';

import ImgLogo from '@/assets/logo.png';

import styles from './index.less';

const UserAvatar = React.memo(props => {
  const { logout: onLogout } = props;

  const { formatMessage } = useIntl();

  const menus = React.useMemo(() => {
    const items = [
      // {
      //   key: 'center',
      //   icon: <UserOutlined />,
      //   text: formatMessage({ id: 'page.user.menu.center' }),
      // },
      // {
      //   key: 'settings',
      //   icon: <SettingOutlined />,
      //   text: formatMessage({ id: 'page.user.menu.settings' }),
      // },
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        text: formatMessage({ id: 'page.user.menu.logout' }),
      },
    ];

    return _.map(items, item => (
      <Menu.Item key={item.key}>
        {item.icon}
        {item.text}
      </Menu.Item>
    ));
  }, [formatMessage]);

  const handleMenuClick = React.useCallback(
    props => {
      switch (props.key) {
        case 'logout':
          return onLogout();
        default:
          break;
      }
    },
    [onLogout]
  );

  const menuProps = {
    // defaultOpenKeys: ,
    // defaultSelectedKeys: ,
    // forceSubMenuRender: ,
    // inlineCollapsed: ,
    // inlineIndent: ,
    // mode: 'inline',
    // multiple: ,
    // openKeys: ,
    selectable: false,
    // selectedKeys,
    // subMenuCloseDelay: ,
    // subMenuOpenDelay: ,
    // theme: 'dark',
    onClick: handleMenuClick,
    // onDeselect: ,
    // onOpenChange: ,
    // onSelect: ,
    // overflowedIndicator: ,
  };

  const overlay = (
    <Menu className={styles.menu} {...menuProps}>
      {menus}
    </Menu>
  );

  const dropdownProps = {
    // disabled: ,
    // getPopupContainer: ,
    overlay,
    // overlayClassName: ,
    placement: 'bottomRight',
    trigger: ['hover'],
    // visible: ,
    // onVisibleChange: ,
  };

  const avatarProps = {
    // icon: ,
    // shape: 'circle',
    // size: ,
    src: ImgLogo,
    // srcSet: ,
    alt: 'avatar',
    // onError: ,
  };

  return (
    <Dropdown {...dropdownProps}>
      <div className={styles.avatar}>
        <Avatar className={styles.image} {...avatarProps} />
      </div>
    </Dropdown>
  );
});

UserAvatar.propTypes = {};

UserAvatar.defaultProps = {};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // dispatch, // 默认不打开，在这个函数里处理 dispatch
    ...UserDispatches(dispatch, ['logout']),
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  // const { location } = ownProps;
  return {
    ...stateProps,
    ...dispatchProps,
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(UserAvatar);
