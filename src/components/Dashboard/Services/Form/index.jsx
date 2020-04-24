import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { history, useIntl } from 'umi';
import { message, Form, Input, Select, Button } from 'antd';

import { hasString } from '@/utils/helper';
import { useAutoFetch } from '@/utils/hook';

import { getRecords as getUpstreamRecords } from '@/transforms/upstream';

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
    label: formatMessage({ id: 'dashboard.services.form.description' }),
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
        placeholder={formatMessage({ id: 'dashboard.services.form.description.placeholder' })}
      />
    </Form.Item>
  );
});

const Upstream = React.memo(props => {
  const { formatMessage } = useIntl();

  const rules = React.useMemo(
    () => [
      {
        required: true,
        message: formatMessage({ id: 'dashboard.services.form.upstream.required' }),
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
    label: formatMessage({ id: 'dashboard.services.form.upstream' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'upstream',
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

  const { response: upstreamRecords, loading } = useAutoFetch({ api: getUpstreamRecords });
  const options = React.useMemo(
    () =>
      _.map(
        _.uniqBy(upstreamRecords || [], r => r.id),
        record => (
          <Select.Option key={record.id} value={record.key} title={record.description}>
            {record.description}
          </Select.Option>
        )
      ),
    [upstreamRecords]
  );

  const selectProps = {
    // allowClear: true,
    // autoClearSearchValue: ,
    // autoFocus: false,
    // defaultActiveFirstOption: false,
    // defaultValue: 'all',
    // disabled: false,
    // dropdownClassName: ,
    // dropdownMatchSelectWidth: true,
    // dropdownRender: ,
    // dropdownStyle: ,
    // filterOption,
    // firstActiveValue: ,
    // getPopupContainer: ,
    // labelInValue: false,
    // maxTagCount: ,
    // maxTagTextLength: ,
    // maxTagPlaceholder: ,
    // mode: ,
    // notFoundContent: ,
    // optionFilterProp: ,
    // optionLabelProp: ,
    placeholder: formatMessage({ id: 'dashboard.services.form.upstream.placeholder' }),
    // showArrow: true,
    // showSearch: true,
    // size: 'default',
    // suffixIcon: ,
    // removeIcon: ,
    // menuItemSelectedIcon: ,
    // tokenSeparators: ,
    // value,
    // onBlur: ,
    // onChange: ,
    // onDeselect: ,
    // onFocus: ,
    // onInputKeyDown: ,
    // onMouseEnter: ,
    // onMouseLeave: ,
    // onPopupScroll: ,
    // onSearch: ,
    // onSelect: ,
    // defaultOpen: ,
    // open: ,
    // onDropdownVisibleChange: ,
    loading,
  };

  return (
    <Form.Item className={styles.type} {...itemProps}>
      <Select className={styles.select} {...selectProps}>
        {options}
      </Select>
    </Form.Item>
  );
});

const Submit = React.memo(props => {
  const { loading } = props;

  const { formatMessage } = useIntl();

  const handleClick = React.useCallback(() => history.push('/dashboard/services'), []);

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
        {formatMessage({ id: 'dashboard.services.form.submit' })}
      </Button>
      <Button className={styles.button} htmlType="button" onClick={handleClick}>
        {formatMessage({ id: 'dashboard.services.form.cancel' })}
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
          formatMessage({ id: `dashboard.services.form.${hasString(record.key) ? 'edit' : 'add'}.success` })
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
      <Description />
      <Upstream />
      <Submit loading={loading} />
    </Form>
  );
});

// EditForm.propTypes = {};

EditForm.defaultProps = {
  record: {},
};

export default EditForm;
