// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { history, useIntl } from 'umi';
import { message, Form, Input, Button } from 'antd';

import styles from './index.less';

const Sni = React.memo(props => {
  const { formatMessage } = useIntl();

  const rules = React.useMemo(
    () => [
      {
        required: true,
        message: formatMessage({ id: 'dashboard.ssl.form.sni.required' }),
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
    label: formatMessage({ id: 'dashboard.ssl.form.sni' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'sni',
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
    <Form.Item className={styles.sni} {...itemProps}>
      <Input className={styles.input} placeholder={formatMessage({ id: 'dashboard.ssl.form.sni.placeholder' })} />
    </Form.Item>
  );
});

const PublicKey = React.memo(props => {
  const { formatMessage } = useIntl();

  const rules = React.useMemo(
    () => [
      {
        required: true,
        message: formatMessage({ id: 'dashboard.ssl.form.public.key.required' }),
      },
      {
        min: 128,
        message: formatMessage({ id: 'dashboard.ssl.form.public.key.min' }),
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
    label: formatMessage({ id: 'dashboard.ssl.form.public.key' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'publicKey',
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
    <Form.Item className={styles.sni} {...itemProps}>
      <Input.TextArea
        className={styles.input}
        placeholder={formatMessage({ id: 'dashboard.ssl.form.public.key.placeholder' })}
        autoSize
      />
    </Form.Item>
  );
});

const PrivateKey = React.memo(props => {
  const { formatMessage } = useIntl();

  const rules = React.useMemo(
    () => [
      {
        required: true,
        message: formatMessage({ id: 'dashboard.ssl.form.private.key.required' }),
      },
      {
        min: 128,
        message: formatMessage({ id: 'dashboard.ssl.form.private.key.min' }),
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
    label: formatMessage({ id: 'dashboard.ssl.form.private.key' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'privateKey',
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
    <Form.Item className={styles.sni} {...itemProps}>
      <Input.TextArea
        className={styles.input}
        placeholder={formatMessage({ id: 'dashboard.ssl.form.private.key.placeholder' })}
        autoSize
      />
    </Form.Item>
  );
});

const Submit = React.memo(props => {
  const { loading } = props;

  const { formatMessage } = useIntl();

  const handleClick = React.useCallback(() => history.push('/dashboard/ssl'), []);

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
    // name: ,
    // normalize: ,
    // required: ,
    // rules: ,,
    // shouldUpdate: ,
    // trigger: ,
    // validateFirst: ,
    // validateStatus: ,
    // validateTrigger: ,
    // valuePropName: ,
    wrapperCol: {
      offset: 4,
      span: 20,
    },
  };

  return (
    <Form.Item className={styles.submit} {...itemProps}>
      <Button className={styles.button} htmlType="submit" type="primary" loading={loading}>
        {formatMessage({ id: 'dashboard.ssl.form.submit' })}
      </Button>
      <Button className={styles.button} htmlType="button" onClick={handleClick}>
        {formatMessage({ id: 'dashboard.ssl.form.cancel' })}
      </Button>
    </Form.Item>
  );
});

const EditForm = React.memo(props => {
  const { className, loading, record, onSubmit } = props;

  const { formatMessage } = useIntl();

  const handleFinish = React.useCallback(
    values =>
      onSubmit({
        key: record.key,
        ...values,
      }).then(() => message.success(formatMessage({ id: 'dashboard.ssl.form.submit.success' }))),
    [formatMessage, onSubmit, record.key]
  );

  const formProps = {
    // component: ,
    // colon: ,
    // fields: ,
    // form: ,
    // hideRequiredMark: ,
    initialValues: record,
    // labelAlign: ,
    labelCol: { span: 4 },
    // layout: ,
    // name: ,
    // scrollToFirstError: ,
    // size: ,
    // validateMessages: ,
    wrapperCol: { span: 20 },
    onFinish: handleFinish,
    // onFinishFailed: ,
    // onFieldsChange: ,
    // onValuesChange: ,
  };

  return (
    <Form className={ClassNames(styles.container, className)} {...formProps}>
      <Sni />
      <PublicKey />
      <PrivateKey />
      <Submit loading={loading} />
    </Form>
  );
});

EditForm.propTypes = {};

EditForm.defaultProps = {};

export default EditForm;
