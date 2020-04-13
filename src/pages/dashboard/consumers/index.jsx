// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
// import { Link, Router, Redirect } from 'umi';
// import {  } from 'antd';
// import { formatMessage } from 'umi-plugin-react/locale';

import styles from './index.less';

const Page = React.memo(props => {
  // const {  } = props;
  return <div className={styles.container}>Stateless Component.</div>;
});

Page.propTypes = {};

Page.defaultProps = {};

export default Page;
