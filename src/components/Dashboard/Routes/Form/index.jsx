import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { history, useIntl } from 'umi';
import { message, Form, Input, Select, Button } from 'antd';

import Plugins from '@/components/Dashboard/Consumers/Plugins';

import { hasString } from '@/utils/helper';
import { useAutoFetch } from '@/utils/hook';

import { getRecords as getUpstreamRecords } from '@/transforms/upstream';
import { getRecords as getServiceRecords } from '@/transforms/services';
import { METHODS } from '@/transforms/routes';

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
    label: formatMessage({ id: 'dashboard.routes.form.description' }),
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
        placeholder={formatMessage({ id: 'dashboard.routes.form.description.placeholder' })}
      />
    </Form.Item>
  );
});

const Uris = React.memo(props => {
  const { formatMessage } = useIntl();

  // const rules = React.useMemo(
  //   () => [
  //     {
  //       required: true,
  //       message: formatMessage({ id: 'dashboard.routes.form.uris.required' }),
  //     },
  //   ],
  //   [formatMessage]
  // );

  const itemProps = {
    // colon: ,
    // dependencies: ,
    // extra: ,
    // getValueFromEvent: ,
    // hasFeedback: ,
    // help: ,
    // htmlFor: ,
    // noStyle: ,
    label: formatMessage({ id: 'dashboard.routes.form.uris' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'uris',
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

  const selectProps = {
    allowClear: true,
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
    mode: 'tags',
    // notFoundContent: ,
    // optionFilterProp: ,
    // optionLabelProp: ,
    placeholder: formatMessage({ id: 'dashboard.routes.form.uris.placeholder' }),
    // showArrow: true,
    // showSearch: true,
    // size: 'default',
    // suffixIcon: ,
    // removeIcon: ,
    // menuItemSelectedIcon: ,
    // tokenSeparators: ,
    // value,
    // onBlur: ,
    // onChange,
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
    // loading,
  };

  return (
    <Form.Item className={styles.uris} {...itemProps}>
      <Select className={styles.select} {...selectProps} />
    </Form.Item>
  );
});

const Hosts = React.memo(props => {
  const { formatMessage } = useIntl();

  // const rules = React.useMemo(
  //   () => [
  //     {
  //       required: true,
  //       message: formatMessage({ id: 'dashboard.routes.form.hosts.required' }),
  //     },
  //   ],
  //   [formatMessage]
  // );

  const itemProps = {
    // colon: ,
    // dependencies: ,
    // extra: ,
    // getValueFromEvent: ,
    // hasFeedback: ,
    // help: ,
    // htmlFor: ,
    // noStyle: ,
    label: formatMessage({ id: 'dashboard.routes.form.hosts' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'hosts',
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

  const selectProps = {
    allowClear: true,
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
    mode: 'tags',
    // notFoundContent: ,
    // optionFilterProp: ,
    // optionLabelProp: ,
    placeholder: formatMessage({ id: 'dashboard.routes.form.hosts.placeholder' }),
    // showArrow: true,
    // showSearch: true,
    // size: 'default',
    // suffixIcon: ,
    // removeIcon: ,
    // menuItemSelectedIcon: ,
    // tokenSeparators: ,
    // value,
    // onBlur: ,
    // onChange,
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
    // loading,
  };

  return (
    <Form.Item className={styles.hosts} {...itemProps}>
      <Select className={styles.select} {...selectProps} />
    </Form.Item>
  );
});

const RemoteAddress = React.memo(props => {
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
    label: formatMessage({ id: 'dashboard.routes.form.remote.address' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'remoteAddress',
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
    <Form.Item className={styles.remoteAddress} {...itemProps}>
      <Input
        className={styles.input}
        placeholder={formatMessage({ id: 'dashboard.routes.form.remote.address.placeholder' })}
      />
    </Form.Item>
  );
});

const Methods = React.memo(props => {
  const { formatMessage } = useIntl();

  // const rules = React.useMemo(
  //   () => [
  //     {
  //       required: true,
  //       message: formatMessage({ id: 'dashboard.routes.form.methods.required' }),
  //     },
  //   ],
  //   [formatMessage]
  // );

  const itemProps = {
    // colon: ,
    // dependencies: ,
    // extra: ,
    // getValueFromEvent: ,
    // hasFeedback: ,
    // help: ,
    // htmlFor: ,
    // noStyle: ,
    label: formatMessage({ id: 'dashboard.routes.form.methods' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'methods',
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

  const options = React.useMemo(
    () =>
      _.map(METHODS, method => (
        <Select.Option key={method} value={method} title={method}>
          {method}
        </Select.Option>
      )),
    []
  );

  const selectProps = {
    allowClear: true,
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
    mode: 'multiple',
    // notFoundContent: ,
    // optionFilterProp: ,
    // optionLabelProp: ,
    placeholder: formatMessage({ id: 'dashboard.routes.form.methods.placeholder' }),
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
    // loading,
  };

  return (
    <Form.Item className={styles.methods} {...itemProps}>
      <Select className={styles.select} {...selectProps}>
        {options}
      </Select>
    </Form.Item>
  );
});

const Upstream = React.memo(props => {
  const { formatMessage } = useIntl();

  // const rules = React.useMemo(
  //   () => [
  //     {
  //       required: true,
  //       message: formatMessage({ id: 'dashboard.routes.form.upstream.required' }),
  //     },
  //   ],
  //   [formatMessage]
  // );

  const itemProps = {
    // colon: ,
    // dependencies: ,
    // extra: ,
    // getValueFromEvent: ,
    // hasFeedback: ,
    // help: ,
    // htmlFor: ,
    // noStyle: ,
    label: formatMessage({ id: 'dashboard.routes.form.upstream' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'upstream',
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

  const { response: upstreamRecords, loading } = useAutoFetch({ api: getUpstreamRecords });
  const options = React.useMemo(
    () =>
      _.map(
        _.uniqBy(upstreamRecords || [], r => r.id),
        record => (
          <Select.Option key={record.id} value={record.key} title={record.description || record.key}>
            {record.description || record.key}
          </Select.Option>
        )
      ),
    [upstreamRecords]
  );

  const selectProps = {
    allowClear: true,
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
    placeholder: formatMessage({ id: 'dashboard.routes.form.upstream.placeholder' }),
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
    <Form.Item className={styles.upstream} {...itemProps}>
      <Select className={styles.select} {...selectProps}>
        {options}
      </Select>
    </Form.Item>
  );
});

const Service = React.memo(props => {
  const { formatMessage } = useIntl();

  // const rules = React.useMemo(
  //   () => [
  //     {
  //       required: true,
  //       message: formatMessage({ id: 'dashboard.routes.form.service.required' }),
  //     },
  //   ],
  //   [formatMessage]
  // );

  const itemProps = {
    // colon: ,
    // dependencies: ,
    // extra: ,
    // getValueFromEvent: ,
    // hasFeedback: ,
    // help: ,
    // htmlFor: ,
    // noStyle: ,
    label: formatMessage({ id: 'dashboard.routes.form.service' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'service',
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

  const { response: ServiceRecords, loading } = useAutoFetch({ api: getServiceRecords });
  const options = React.useMemo(
    () =>
      _.map(
        _.uniqBy(ServiceRecords || [], r => r.id),
        record => (
          <Select.Option key={record.id} value={record.key} title={record.description || record.key}>
            {record.description || record.key}
          </Select.Option>
        )
      ),
    [ServiceRecords]
  );

  const selectProps = {
    allowClear: true,
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
    placeholder: formatMessage({ id: 'dashboard.routes.form.service.placeholder' }),
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
    <Form.Item className={styles.service} {...itemProps}>
      <Select className={styles.select} {...selectProps}>
        {options}
      </Select>
    </Form.Item>
  );
});

const Submit = React.memo(props => {
  const { loading } = props;

  const { formatMessage } = useIntl();

  const handleClick = React.useCallback(() => history.push('/dashboard/routes'), []);

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
        {formatMessage({ id: 'dashboard.routes.form.submit' })}
      </Button>
      <Button className={styles.button} htmlType="button" onClick={handleClick}>
        {formatMessage({ id: 'dashboard.routes.form.cancel' })}
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
          formatMessage({ id: `dashboard.routes.form.${hasString(record.key) ? 'edit' : 'add'}.success` })
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
      <Uris />
      <Hosts />
      <RemoteAddress />
      <Methods />
      <Upstream />
      <Service />
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
