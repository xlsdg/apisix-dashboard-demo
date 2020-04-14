import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
// import { useIntl } from 'umi';
import { Layout } from 'antd';
// import {  } from '@ant-design/icons';

import Avatar from '../Avatar';

import styles from './index.less';

const Title = React.memo(props => {
  const { location } = props;
  return <h2 className={styles.title}>{_.capitalize(_.split(location.pathname, '/')[2])}</h2>;
});

const Header = React.memo(props => {
  const { location } = props;

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.left}>
        <Title location={location} />
      </div>
      <div className={styles.right}>
        <Avatar />
      </div>
    </Layout.Header>
  );
});

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
