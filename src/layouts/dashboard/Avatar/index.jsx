import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { useIntl } from 'umi';
import { Menu, Dropdown, Avatar } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import { createUseDispatchSelector } from '@/redux/actions/user';

import ImgLogo from '@/assets/logo.png';

import styles from './index.less';

const useDispatchSelector = createUseDispatchSelector(['logout']);

function UserAvatar(props) {
  // const {  } = props;

  const [{ logout }] = useDispatchSelector();

  const { formatMessage } = useIntl();

  const menus = React.useMemo(() => {
    const items = [
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        text: formatMessage({ id: 'user.menu.logout' }),
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
          return logout();
        default:
          break;
      }
    },
    [logout]
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
}

// UserAvatar.propTypes = {};

UserAvatar.defaultProps = {};

export default React.memo(UserAvatar);
