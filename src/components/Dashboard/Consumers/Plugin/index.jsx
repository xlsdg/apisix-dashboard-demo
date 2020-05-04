import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { useIntl } from 'umi';
import { Form, Select, Skeleton, InputNumber, Input, Switch, Button } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

import { useFetch } from '@/utils/hook';
import { hasArray, hasString, hasPlainObject, getValue } from '@/utils/helper';

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
    disabled: loading || (hasArray(initialValues) && initialValues.length === 1),
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

const NumberInput = React.memo(props => {
  const { values = {} } = props;

  const itemProps = {
    // colon: ,
    // dependencies: ,
    // extra: ,
    // getValueFromEvent: ,
    // hasFeedback: ,
    // help: ,
    // htmlFor: ,
    // noStyle: ,
    label: values.name,
    // labelAlign: ,
    // labelCol: ,
    name: values.name,
    // normalize: ,
    required: values.required,
    // rules,
    // shouldUpdate: ,
    // trigger: ,
    // validateFirst: ,
    // validateStatus: ,
    // validateTrigger: ,
    // valuePropName: ,
    // wrapperCol: ,
  };

  const inputProps = {
    // autoFocus: ,
    defaultValue: values.default,
    // disabled: ,
    // formatter: ,
    max: values.max,
    min: values.min,
    // parser: ,
    precision: values.precision,
    // decimalSeparator: ,
    // size: ,
    // step: ,
    placeholder: values.description,
    // value: ,
    // onChange: ,
    // onPressEnter: ,
  };

  return (
    <Form.Item className={styles.number} {...itemProps}>
      <InputNumber className={styles.input} {...inputProps} />
    </Form.Item>
  );
});

const TextInput = React.memo(props => {
  const { values = {} } = props;

  // TODO: min, pattern, anyOf rules

  const itemProps = {
    // colon: ,
    // dependencies: ,
    // extra: ,
    // getValueFromEvent: ,
    // hasFeedback: ,
    // help: ,
    // htmlFor: ,
    // noStyle: ,
    label: values.name,
    // labelAlign: ,
    // labelCol: ,
    name: values.name,
    // normalize: ,
    required: values.required,
    // rules,
    // shouldUpdate: ,
    // trigger: ,
    // validateFirst: ,
    // validateStatus: ,
    // validateTrigger: ,
    // valuePropName: ,
    // wrapperCol: ,
  };

  const inputProps = {
    // addonAfter: ,
    // addonBefore: ,
    defaultValue: values.default,
    // disabled: ,
    // id: ,
    maxLength: values.max,
    minLength: values.min,
    // prefix: ,
    // size: ,
    // suffix: ,
    // type: ,
    placeholder: values.description,
    // value: ,
    // onChange: ,
    // onPressEnter: ,
    // allowClear: ,
  };

  return (
    <Form.Item className={styles.text} {...itemProps}>
      <Input className={styles.input} {...inputProps} />
    </Form.Item>
  );
});

const SelectText = React.memo(props => {
  const { values = {} } = props;

  const itemProps = {
    // colon: ,
    // dependencies: ,
    // extra: ,
    // getValueFromEvent: ,
    // hasFeedback: ,
    // help: ,
    // htmlFor: ,
    // noStyle: ,
    label: values.name,
    // labelAlign: ,
    // labelCol: ,
    name: values.name,
    // normalize: ,
    required: values.required,
    // rules,
    // shouldUpdate: ,
    // trigger: ,
    // validateFirst: ,
    // validateStatus: ,
    // validateTrigger: ,
    // valuePropName: ,
    // wrapperCol: ,
  };

  const inputProps = {
    allowClear: true,
    // autoClearSearchValue: ,
    // autoFocus: false,
    // defaultActiveFirstOption: false,
    defaultValue: values.default,
    // disabled: ,
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
    placeholder: values.description,
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

  const options = React.useMemo(
    () =>
      _.map(values.options, text => (
        <Select.Option key={text} value={text} title={text}>
          {text}
        </Select.Option>
      )),
    [values.options]
  );

  return (
    <Form.Item className={styles.switch} {...itemProps}>
      <Select className={styles.input} {...inputProps}>
        {options}
      </Select>
    </Form.Item>
  );
});

const SwitchInput = React.memo(props => {
  const { values = {} } = props;

  const itemProps = {
    // colon: ,
    // dependencies: ,
    // extra: ,
    // getValueFromEvent: ,
    // hasFeedback: ,
    // help: ,
    // htmlFor: ,
    // noStyle: ,
    label: values.name,
    // labelAlign: ,
    // labelCol: ,
    name: values.name,
    // normalize: ,
    required: values.required,
    // rules,
    // shouldUpdate: ,
    // trigger: ,
    // validateFirst: ,
    // validateStatus: ,
    // validateTrigger: ,
    // valuePropName: ,
    // wrapperCol: ,
  };

  const inputProps = {
    // autoFocus: ,
    // checked: ,
    // checkedChildren: ,
    defaultChecked: values.default,
    // disabled: ,
    // loading: ,
    // size: ,
    // unCheckedChildren	: ,
    // onChange: ,
    // onClick: ,
    // placeholder: values.description,
  };

  return (
    <Form.Item className={styles.switch} {...itemProps}>
      <Switch className={styles.input} {...inputProps} />
    </Form.Item>
  );
});

const ListArray = React.memo(props => {
  const { values } = props;

  const { formatMessage } = useIntl();

  const inputProps = {
    // addonAfter: ,
    // addonBefore: ,
    defaultValue: values.items.default,
    // disabled: ,
    // id: ,
    maxLength: values.items.max,
    minLength: values.items.min,
    // prefix: ,
    // size: ,
    // suffix: ,
    // type: ,
    placeholder: values.items.description,
    // value: ,
    // onChange: ,
    // onPressEnter: ,
    // allowClear: ,
  };

  const rules = [];
  if (values.required) {
    rules.push({ required: true, whitespace: true });
  }

  const render = (fields, operation) => {
    const items = _.map(fields, (field, index) => {
      const itemProps = {
        fieldKey: field.fieldKey,
        name: field.name,
        rules,
        validateFirst: true,
      };

      return (
        <Form.Item key={field.key} className={styles.rowItem} label={index === 0 ? _.last(values.name) : undefined}>
          <div className={styles.row}>
            <Form.Item className={styles.item} {...itemProps}>
              <Input className={styles.input} {...inputProps} />
            </Form.Item>
            <MinusCircleOutlined className={styles.remove} onClick={() => operation.remove(field.name)} />
          </div>
        </Form.Item>
      );
    });

    return (
      <div className={styles.listArray}>
        {items}
        <Form.Item className={styles.add}>
          <Button className={styles.button} type="dashed" onClick={() => operation.add()}>
            <PlusOutlined />
            {`${formatMessage({ id: 'dashboard.consumers.form.plugin.array.add' })} ${_.last(values.name)}`}
          </Button>
        </Form.Item>
      </div>
    );
  };

  return <Form.List name={values.name}>{render}</Form.List>;
});

function generateFormItem(values) {
  const tag = getValue(values, 'tag');
  const type = getValue(values, 'type');

  // 对象
  if (tag === 'list' && type === 'object') {
    const items = getValue(values, 'items', []);
    return _.map(items, generateFormItem);
  }

  const key = _.join(values.name, '-');

  // 数组
  if (tag === 'list' && type === 'array') {
    return <ListArray key={key} values={values} />;
  }

  // 非整数
  if (tag === 'input' && type === 'number') {
    return <NumberInput key={key} values={values} />;
  }

  // 字符串
  if (tag === 'input' && type === 'text') {
    return <TextInput key={key} values={values} />;
  }

  // 单选
  if (tag === 'select' && type === 'text') {
    return <SelectText key={key} values={values} />;
  }

  // 布尔
  if (tag === 'input' && type === 'switch') {
    return <SwitchInput key={key} values={values} />;
  }

  return null;
}

const Settings = React.memo(props => {
  const { loading, values } = props;

  if (loading) {
    return <Skeleton active />;
  }

  return generateFormItem(values);
});

function Plugin(props) {
  const { className, form, data } = props;

  const { fetch, loading } = useFetch();

  const pluginSettings = React.useRef({});
  const [settings, setSettings] = React.useState({});

  const getPluginSettings = React.useCallback(
    name => {
      const exist = pluginSettings.current[name];
      if (hasPlainObject(exist)) {
        setSettings(exist);
        return Promise.resolve(exist);
      }

      return fetch(getPlugin, { plugin: name })
        .then(resp => {
          setSettings(resp);
          pluginSettings.current[name] = resp;
          return resp;
        })
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
    layout: 'vertical',
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

    form.setFieldsValue({
      plugin: pluginName,
      ...data.settings,
    });

    getPluginSettings(pluginName);

    return () => {
      form.resetFields();
    };
  }, [data.plugins, data.settings, form, getPluginSettings]);

  return (
    <Form className={ClassNames(styles.container, className)} {...formProps}>
      <Plugins loading={loading} initialValues={data.plugins} />
      <Settings loading={loading} values={settings} />
    </Form>
  );
}

// Plugin.propTypes = {};

Plugin.defaultProps = {};

export default React.memo(Plugin);
