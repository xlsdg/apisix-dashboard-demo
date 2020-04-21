// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { history, useIntl } from 'umi';
import { message, Form, Button } from 'antd';

import { hasString } from '@/utils/helper';

import styles from './index.less';

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
      offset: 4,
      span: 20,
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
          formatMessage(
            { id: 'dashboard.consumers.form.submit.success' },
            { action: hasString(record.key) ? 'Edited' : 'Added' }
          )
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
      <Submit loading={loading} />
    </Form>
  );
});

// EditForm.propTypes = {};

EditForm.defaultProps = {
  record: {},
};

export default EditForm;
