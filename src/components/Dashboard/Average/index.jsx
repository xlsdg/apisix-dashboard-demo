// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
// import {  } from 'antd';

import styles from './index.less';

function Average(props) {
  const { className, left, right } = props;

  return (
    <div className={ClassNames(styles.container, className)}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right}>{right}</div>
    </div>
  );
}

// Average.propTypes = {};

Average.defaultProps = {};

export default React.memo(Average);
