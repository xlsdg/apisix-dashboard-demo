// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
// import {  } from 'antd';

import Loading from '@/components/Loading';

import styles from './index.less';

const PageLoading = React.memo(props => {
  // const {  } = props;
  return <Loading className={styles.container} />;
});

PageLoading.propTypes = {};

PageLoading.defaultProps = {};

export default PageLoading;
