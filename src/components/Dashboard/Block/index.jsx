// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
// import {  } from 'antd';

import styles from './index.less';

function Block(props) {
  const { className, children } = props;
  return <div className={ClassNames(styles.container, className)}>{children}</div>;
}

// Block.propTypes = {};

Block.defaultProps = {};

export default React.memo(Block);
