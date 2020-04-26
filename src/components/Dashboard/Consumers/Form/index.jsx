// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { history, useIntl } from 'umi';
import { message, Form, Input, Button } from 'antd';

import Plugins from '@/components/Dashboard/Consumers/Plugins';

import { hasString } from '@/utils/helper';

import styles from './index.less';

const Description = React.memo(props => {
  const { formatMessage } = useIntl();

  const itemProps = {
    // colon: ,
    // dependencies: ,
    // extra: ,
    // getValueFromEvent: ,
    // hasFeedback: ,
    // help: ,
    // htmlFor: ,
    // noStyle: ,
    label: formatMessage({ id: 'dashboard.consumers.form.description' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'description',
    // normalize: ,
    // required: ,
    // rules,
    // shouldUpdate: ,
    // trigger: ,
    // validateFirst: ,
    // validateStatus: ,
    // validateTrigger: ,
    // valuePropName: ,
    // wrapperCol: ,
  };

  return (
    <Form.Item className={styles.description} {...itemProps}>
      <Input
        className={styles.input}
        placeholder={formatMessage({ id: 'dashboard.consumers.form.description.placeholder' })}
      />
    </Form.Item>
  );
});

const UserName = React.memo(props => {
  const { formatMessage } = useIntl();

  const rules = React.useMemo(
    () => [
      {
        required: true,
        message: formatMessage({ id: 'dashboard.consumers.form.user.name.required' }),
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
    label: formatMessage({ id: 'dashboard.consumers.form.user.name' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'userName',
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
    <Form.Item className={styles.userName} {...itemProps}>
      <Input
        className={styles.input}
        placeholder={formatMessage({ id: 'dashboard.consumers.form.user.name.placeholder' })}
      />
    </Form.Item>
  );
});

const Submit = React.memo(props => {
  const { loading } = props;

  const { formatMessage } = useIntl();

  const handleClick = React.useCallback(() => history.push('/dashboard/consumers'), []);

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
      offset: 6,
      span: 18,
    },
  };

  return (
    <Form.Item className={styles.submit} {...itemProps}>
      <Button className={styles.button} htmlType="submit" type="primary" loading={loading}>
        {formatMessage({ id: 'dashboard.consumers.form.submit' })}
      </Button>
      <Button className={styles.button} htmlType="button" onClick={handleClick}>
        {formatMessage({ id: 'dashboard.consumers.form.cancel' })}
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
      }).then(() =>
        message.success(
          formatMessage({ id: `dashboard.consumers.form.${hasString(record.key) ? 'edit' : 'add'}.success` })
        )
      ),
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
    labelCol: { span: 6 },
    // layout: ,
    // name: ,
    // scrollToFirstError: ,
    // size: ,
    // validateMessages: ,
    wrapperCol: { span: 18 },
    onFinish: handleFinish,
    // onFinishFailed: ,
    // onFieldsChange: ,
    // onValuesChange: ,
  };

  return (
    <Form className={ClassNames(styles.container, className)} {...formProps}>
      <Description />
      <UserName />
      <Plugins />
      <Submit loading={loading} />
    </Form>
  );
});

// EditForm.propTypes = {};

EditForm.defaultProps = {
  record: {},
};

export default EditForm;
