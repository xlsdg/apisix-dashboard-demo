import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { Redirect } from 'umi';
// import {  } from 'antd';
// import { formatMessage } from 'umi-plugin-react/locale';

import PageLoading from '@/components/PageLoading';

import { isLoggedIn } from '@/utils/store';

const PrivatePage = React.memo(props => {
  const { children, errTo, authTo } = props;

  const [auth, setAuth] = React.useState(undefined);

  React.useEffect(() => {
    let unMounting = false;

    isLoggedIn()
      .then(isAuth => {
        if (unMounting) {
          return;
        }

        setAuth(!!isAuth);
      })
      .catch(() => {
        if (unMounting) {
          return;
        }

        setAuth(null);
      });

    return () => {
      unMounting = true;
    };
  }, []);

  return _.isUndefined(auth) ? (
    <PageLoading />
  ) : _.isNull(auth) ? (
    <Redirect to={errTo} />
  ) : auth ? (
    children
  ) : (
    <Redirect to={authTo} />
  );
});

PrivatePage.propTypes = {
  errTo: PropTypes.string.isRequired,
  authTo: PropTypes.string.isRequired,
};

PrivatePage.defaultProps = {};

export default PrivatePage;
