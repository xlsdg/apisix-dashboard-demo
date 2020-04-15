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

const Average = React.memo(props => {
  const { className, left, right } = props;

  return (
    <div className={ClassNames(styles.container, className)}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right}>{right}</div>
    </div>
  );
});

Average.propTypes = {};

Average.defaultProps = {};

export default Average;
