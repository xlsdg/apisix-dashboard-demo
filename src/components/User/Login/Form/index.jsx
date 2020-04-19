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
        message: formatMessage({ id: 'user.login.form.username.required' }),
      },
    ],
    [formatMessage]
  );

  const itemProps = {
    // colon: ,
    // dependencies: ,
    // extra: ,
    // getValueFromEvent: ,
    // hasFeedback: ,
    // help: ,
    // htmlFor: ,
    // noStyle: ,
    // label: ,
    // labelAlign: ,
    // labelCol: ,
    name: 'username',
    // normalize: ,
    // required: ,
    rules,
    // shouldUpdate: ,
    // trigger: ,
    // validateFirst: ,
    // validateStatus: ,
    // validateTrigger: ,
    // valuePropName: ,
    // wrapperCol: ,
  };

  return (
    <Form.Item className={styles.username} {...itemProps}>
      <Input
        className={styles.input}
        prefix={<UserOutlined className={styles.icon} />}
        placeholder={formatMessage({ id: 'user.login.form.username' })}
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
        message: formatMessage({ id: 'user.login.form.password.required' }),
      },
    ],
    [formatMessage]
  );

  const itemProps = {
    // colon: ,
    // dependencies: ,
    // extra: ,
    // getValueFromEvent: ,
    // hasFeedback: ,
    // help: ,
    // htmlFor: ,
    // noStyle: ,
    // label: ,
    // labelAlign: ,
    // labelCol: ,
    name: 'password',
    // normalize: ,
    // required: ,
    rules,
    // shouldUpdate: ,
    // trigger: ,
    // validateFirst: ,
    // validateStatus: ,
    // validateTrigger: ,
    // valuePropName: ,
    // wrapperCol: ,
  };

  return (
    <Form.Item className={styles.password} {...itemProps}>
      <Input
        className={styles.input}
        prefix={<LockOutlined className={styles.icon} />}
        type="password"
        placeholder={formatMessage({ id: 'user.login.form.password' })}
      />
    </Form.Item>
  );
});

const Submit = React.memo(props => {
  const { loading } = props;

  const { formatMessage } = useIntl();

  return (
    <Form.Item className={styles.submit}>
      <Button className={styles.button} htmlType="submit" type="primary" loading={loading} block>
        {formatMessage({ id: 'user.login.form.submit' })}
      </Button>
    </Form.Item>
  );
});

const LoginForm = React.memo(props => {
  const { loading, onSubmit } = props;

  const initialValues = React.useMemo(
    () => ({
      username: 'admin',
      password: '123456',
    }),
    []
  );

  const formProps = {
    // component: ,
    // colon: ,
    // fields: ,
    // form: ,
    // hideRequiredMark: ,
    initialValues,
    // labelAlign: ,
    // labelCol: ,
    // layout: ,
    // name: ,
    // scrollToFirstError: ,
    // size: ,
    // validateMessages: ,
    // wrapperCol: ,
    onFinish: onSubmit,
    // onFinishFailed: ,
    // onFieldsChange: ,
    // onValuesChange: ,
  };

  return (
    <Form className={styles.container} {...formProps}>
      <Username />
      <Password />
      <Submit loading={loading} />
    </Form>
  );
});

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {};

export default LoginForm;
