import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { useIntl } from 'umi';
import { Form, Select, Skeleton } from 'antd';
// import {  } from '@ant-design/icons';

import { useFetch } from '@/utils/hook';
import { hasArray, hasString } from '@/utils/helper';

import { getPlugin } from '@/transforms/consumers';

import styles from './index.less';

const Plugins = React.memo(props => {
  const { loading, initialValues } = props;

  const { formatMessage } = useIntl();

  const rules = React.useMemo(
    () => [
      {
        required: true,
        message: formatMessage({ id: 'dashboard.consumers.form.plugin.select.required' }),
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
    label: formatMessage({ id: 'dashboard.consumers.form.plugin.select' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'plugin',
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

  const options = React.useMemo(
    () =>
      _.map(initialValues, plugin => (
        <Select.Option key={plugin} value={plugin} title={plugin}>
          {plugin}
        </Select.Option>
      )),
    [initialValues]
  );

  const selectProps = {
    // allowClear: false,
    // autoClearSearchValue: ,
    // autoFocus: false,
    // defaultActiveFirstOption: false,
    // defaultValue: 'all',
    disabled: hasArray(initialValues) && initialValues.length === 1,
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
    // mode: 'tags',
    // notFoundContent: ,
    // optionFilterProp: ,
    // optionLabelProp: ,
    placeholder: formatMessage({ id: 'dashboard.consumers.form.plugin.select.placeholder' }),
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
    loading,
  };

  return (
    <Form.Item className={styles.plugin} {...itemProps}>
      <Select className={styles.select} {...selectProps}>
        {options}
      </Select>
    </Form.Item>
  );
});

const Settings = React.memo(props => {
  const { loading, initialValues, values } = props;
  const formItems = [];

  if (loading) {
    return <Skeleton active />;
  }
  console.log(initialValues, values);
  return hasArray(formItems) ? formItems : null;
});

function Plugin(props) {
  const { className, form, data } = props;

  const { fetch, loading } = useFetch();
  const [settings, setSettings] = React.useState({});

  const getPluginSettings = React.useCallback(
    name => {
      return fetch(getPlugin, { plugin: name })
        .then(setSettings)
        .catch(() => {});
    },
    [fetch]
  );

  const handleValuesChange = React.useCallback(
    (changedValues = {}) => {
      if (hasString(changedValues.plugin)) {
        getPluginSettings(changedValues.plugin);
      }
    },
    [getPluginSettings]
  );

  const formProps = {
    // component: ,
    // colon: ,
    // fields: ,
    form,
    // hideRequiredMark: ,
    // initialValues: ,
    // labelAlign: ,
    // labelCol: { span: 6 },
    // layout: 'vertical',
    // name: ,
    // scrollToFirstError: ,
    // size: ,
    // validateMessages: ,
    // wrapperCol: { span: 18 },
    // onFinish: ,
    // onFinishFailed: ,
    // onFieldsChange: ,
    onValuesChange: handleValuesChange,
  };

  React.useEffect(() => {
    const pluginName = data.plugins[0];

    form.setFieldsValue({ plugin: pluginName });
    getPluginSettings(pluginName);

    return () => {
      form.resetFields();
    };
  }, [data.plugins, form, getPluginSettings]);

  return (
    <Form className={ClassNames(styles.container, className)} {...formProps}>
      <Plugins loading={loading} initialValues={data.plugins} />
      <Settings loading={loading} initialValues={data.settings} values={settings} />
    </Form>
  );
}

// Plugin.propTypes = {};

Plugin.defaultProps = {};

export default React.memo(Plugin);
