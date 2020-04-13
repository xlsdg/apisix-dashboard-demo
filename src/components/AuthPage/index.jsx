import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { Redirect } from 'umi';
// import {  } from 'antd';
// import { formatMessage } from 'umi-plugin-react/locale';

import PageLoading from '@/components/PageLoading';

import { isLoggedIn } from '@/utils/store';

const AuthPage = React.memo(props => {
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
    <Redirect to={authTo} />
  ) : (
    children
  );
});

AuthPage.propTypes = {
  errTo: PropTypes.string.isRequired,
  authTo: PropTypes.string.isRequired,
};

AuthPage.defaultProps = {};

export default AuthPage;
