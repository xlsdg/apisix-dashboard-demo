// import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { useIntl } from 'umi';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import styles from './index.less';

const Username = React.memo(props => {
  const { formatMessage } = useIntl();

  const rules = React.useMemo(
    () => [
      {
        required: true,
        message: formatMessage({ id: 'page.user.login.form.username.required' }),
      },
    ],
    [formatMessage]
  );

  return (
    <Form.Item name="username" rules={rules}>
      <Input
        className={styles.input}
        prefix={<UserOutlined className={styles.icon} />}
        placeholder={formatMessage({ id: 'page.user.login.form.username' })}
      />
    </Form.Item>
  );
});

const Password = React.memo(props => {
  const { formatMessage } = useIntl();

  const rules = React.useMemo(
    () => [
      {
        required: true,
        message: formatMessage({ id: 'page.user.login.form.password.required' }),
      },
    ],
    [formatMessage]
  );

  return (
    <Form.Item name="password" rules={rules}>
      <Input
        className={styles.input}
        prefix={<LockOutlined className={styles.icon} />}
        type="password"
        placeholder={formatMessage({ id: 'page.user.login.form.password' })}
      />
    </Form.Item>
  );
});

const Submit = React.memo(props => {
  const { formatMessage } = useIntl();

  return (
    <Form.Item>
      <Button className={styles.submit} htmlType="submit" type="primary" block>
        {formatMessage({ id: 'page.user.login.form.submit' })}
      </Button>
    </Form.Item>
  );
});

const LoginForm = React.memo(props => {
  const { onSubmit } = props;

  const initialValues = React.useMemo(
    () => ({
      username: 'admin',
      password: '123456',
    }),
    []
  );

  return (
    <Form className={styles.container} name="login" initialValues={initialValues} onFinish={onSubmit}>
      <Username />
      <Password />
      <Submit />
    </Form>
  );
});

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {};

export default LoginForm;
