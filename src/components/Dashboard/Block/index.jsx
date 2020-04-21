// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
// import Link from 'umi/link';
// import Router from 'umi/router';
// import Redirect from 'umi/redirect';
// import {  } from 'antd';
// import { formatMessage } from 'umi-plugin-react/locale';

import styles from './index.less';

function Block(props) {
  const { className, children } = props;
  return <div className={ClassNames(styles.container, className)}>{children}</div>;
}

Block.propTypes = {};

Block.defaultProps = {};

export default React.memo(Block);
