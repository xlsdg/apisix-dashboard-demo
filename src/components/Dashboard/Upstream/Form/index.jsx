import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { history, useIntl } from 'umi';
import { message, Form, Input, Select, Switch, InputNumber, Modal, Button } from 'antd';
import { PlusOutlined, MinusCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import { TYPES as UPSTREAM_TYPES } from '@/transforms/upstream';

import { hasString, hasArray, getValue } from '@/utils/helper';

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
    label: formatMessage({ id: 'dashboard.upstream.form.description' }),
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
        placeholder={formatMessage({ id: 'dashboard.upstream.form.description.placeholder' })}
      />
    </Form.Item>
  );
});

const Type = React.memo(props => {
  const { formatMessage } = useIntl();

  const rules = React.useMemo(
    () => [
      {
        required: true,
        message: formatMessage({ id: 'dashboard.upstream.form.type.required' }),
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
    label: formatMessage({ id: 'dashboard.upstream.form.type' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'type',
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
      _.reduce(
        UPSTREAM_TYPES,
        (result, prop, value) => {
          result.push(
            <Select.Option key={value} value={value} title={prop.name}>
              {prop.name}
            </Select.Option>
          );
          return result;
        },
        []
      ),
    []
  );

  return (
    <Form.Item className={styles.type} {...itemProps}>
      <Select className={styles.select} placeholder={formatMessage({ id: 'dashboard.upstream.form.type.placeholder' })}>
        {options}
      </Select>
    </Form.Item>
  );
});

const HashOn = React.memo(props => {
  const { formatMessage } = useIntl();

  const shouldUpdate = React.useCallback((prevValues, currentValues) => prevValues.type !== currentValues.type, []);

  const render = React.useCallback(
    form => {
      const type = form.getFieldValue('type');

      if (!hasString(type)) {
        return null;
      }

      const rules = [
        {
          required: true,
          message: formatMessage({ id: 'dashboard.upstream.form.hash.on.required' }),
        },
      ];

      const itemProps = {
        // colon: ,
        // dependencies: ,
        // extra: ,
        // getValueFromEvent: ,
        // hasFeedback: ,
        // help: ,
        // htmlFor: ,
        // noStyle: ,
        label: formatMessage({ id: 'dashboard.upstream.form.hash.on' }),
        // labelAlign: ,
        // labelCol: ,
        name: [type, 'hashOn'],
        // normalize: ,
        // required: ,
        rules,
        // shouldUpdate,
        // trigger: ,
        // validateFirst: ,
        // validateStatus: ,
        // validateTrigger: ,
        // valuePropName: ,
        // wrapperCol: ,
      };

      const options = _.reduce(
        getValue(UPSTREAM_TYPES, `${type}.props.hashOn.items`, []),
        (result, item) => {
          result.push(
            <Select.Option key={item.value} value={item.value} title={item.name}>
              {item.name}
            </Select.Option>
          );
          return result;
        },
        []
      );

      if (!hasArray(options)) {
        return null;
      }

      return (
        <Form.Item className={styles.hashOn} {...itemProps}>
          <Select
            className={styles.select}
            placeholder={formatMessage({ id: 'dashboard.upstream.form.hash.on.placeholder' })}
          >
            {options}
          </Select>
        </Form.Item>
      );
    },
    [formatMessage]
  );

  return (
    <Form.Item noStyle shouldUpdate={shouldUpdate}>
      {render}
    </Form.Item>
  );
});

const HashKey = React.memo(props => {
  const { formatMessage } = useIntl();

  const shouldUpdate = React.useCallback((prevValues, currentValues) => prevValues.type !== currentValues.type, []);

  const render = React.useCallback(
    form => {
      const type = form.getFieldValue('type');

      if (!hasString(type)) {
        return null;
      }

      const rules = [
        {
          required: true,
          message: formatMessage({ id: 'dashboard.upstream.form.hash.key.required' }),
        },
      ];

      const itemProps = {
        // colon: ,
        // dependencies: ,
        // extra: ,
        // getValueFromEvent: ,
        // hasFeedback: ,
        // help: ,
        // htmlFor: ,
        // noStyle: ,
        label: formatMessage({ id: 'dashboard.upstream.form.hash.key' }),
        // labelAlign: ,
        // labelCol: ,
        name: [type, 'hashKey'],
        // normalize: ,
        // required: ,
        rules,
        // shouldUpdate,
        // trigger: ,
        // validateFirst: ,
        // validateStatus: ,
        // validateTrigger: ,
        // valuePropName: ,
        // wrapperCol: ,
      };

      const options = _.reduce(
        getValue(UPSTREAM_TYPES, `${type}.props.hashKey.items`, []),
        (result, item) => {
          result.push(
            <Select.Option key={item.value} value={item.value} title={item.name}>
              {item.name}
            </Select.Option>
          );
          return result;
        },
        []
      );

      if (!hasArray(options)) {
        return null;
      }

      return (
        <Form.Item className={styles.hashKey} {...itemProps}>
          <Select
            className={styles.select}
            placeholder={formatMessage({ id: 'dashboard.upstream.form.hash.key.placeholder' })}
          >
            {options}
          </Select>
        </Form.Item>
      );
    },
    [formatMessage]
  );

  return (
    <Form.Item noStyle shouldUpdate={shouldUpdate}>
      {render}
    </Form.Item>
  );
});

const Websocket = React.memo(props => {
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
    label: formatMessage({ id: 'dashboard.upstream.form.websocket' }),
    // labelAlign: ,
    // labelCol: ,
    name: 'websocket',
    // normalize: ,
    // required: ,
    // rules,
    // shouldUpdate: ,
    // trigger: ,
    // validateFirst: ,
    // validateStatus: ,
    // validateTrigger: ,
    valuePropName: 'checked',
    // wrapperCol: ,
  };

  return (
    <Form.Item className={styles.websocket} {...itemProps}>
      <Switch />
    </Form.Item>
  );
});

const Remove = React.memo(props => {
  const { onClick } = props;

  const { formatMessage } = useIntl();

  const handleClick = React.useCallback(
    () =>
      Modal.confirm({
        title: formatMessage({ id: 'dashboard.upstream.form.nodes.delete.title' }),
        icon: <ExclamationCircleOutlined />,
        content: formatMessage({ id: 'dashboard.upstream.form.nodes.delete.content' }),
        okText: formatMessage({ id: 'dashboard.upstream.form.nodes.delete.ok' }),
        okType: 'danger',
        cancelText: formatMessage({ id: 'dashboard.upstream.form.nodes.delete.cancel' }),
        onOk: onClick,
      }),
    [formatMessage, onClick]
  );

  return <MinusCircleOutlined className={styles.remove} onClick={handleClick} />;
});

const Nodes = React.memo(props => {
  const { formatMessage } = useIntl();

  const render = (fields, operation) => {
    const nodes = _.map(fields, (field, index) => {
      const hostRules = [
        {
          required: true,
          message: formatMessage({ id: 'dashboard.upstream.form.nodes.host.required' }),
        },
        {
          validator: async (rule, value) => {
            if (
              /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(
                value
              )
            ) {
              return;
            } else if (
              /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/.test(
                value
              )
            ) {
              return;
            } else {
              throw new Error(formatMessage({ id: 'dashboard.upstream.form.nodes.host.required' }));
            }
          },
        },
      ];
      const hostProps = {
        // colon: ,
        // dependencies: ,
        // extra: ,
        fieldKey: [field.fieldKey, 'host'],
        // getValueFromEvent: ,
        // hasFeedback: ,
        // help: ,
        // htmlFor: ,
        // noStyle: ,
        // label: ,
        // labelAlign: ,
        // labelCol: ,
        name: [field.name, 'host'],
        // normalize: ,
        // required: ,
        rules: hostRules,
        // shouldUpdate: ,
        // trigger: ,
        validateFirst: true,
        // validateStatus: ,
        // validateTrigger: ,
        // valuePropName: ,
        // wrapperCol: ,
      };

      const portRules = [
        {
          required: true,
          message: formatMessage({ id: 'dashboard.upstream.form.nodes.port.required' }),
        },
      ];
      const portProps = {
        fieldKey: [field.fieldKey, 'port'],
        name: [field.name, 'port'],
        rules: portRules,
      };

      const weightsRules = [
        {
          required: true,
          message: formatMessage({ id: 'dashboard.upstream.form.nodes.weights.required' }),
        },
      ];
      const weightsProps = {
        fieldKey: [field.fieldKey, 'weights'],
        name: [field.name, 'weights'],
        rules: weightsRules,
      };

      const remove = <Remove onClick={() => operation.remove(field.name)} />;

      return (
        <Form.Item
          key={field.key}
          className={styles.node}
          label={`${formatMessage({ id: 'dashboard.upstream.form.nodes.node' })} ${index + 1}`}
        >
          <div className={styles.row}>
            <Form.Item className={styles.host} {...hostProps}>
              <Input placeholder={formatMessage({ id: 'dashboard.upstream.form.nodes.host.placeholder' })} />
            </Form.Item>
            <Form.Item className={styles.port} {...portProps}>
              <InputNumber
                min={0}
                max={65535}
                placeholder={formatMessage({ id: 'dashboard.upstream.form.nodes.port.placeholder' })}
              />
            </Form.Item>
            <Form.Item className={styles.weights} {...weightsProps}>
              <InputNumber
                min={0}
                placeholder={formatMessage({ id: 'dashboard.upstream.form.nodes.weights.placeholder' })}
              />
            </Form.Item>
            {fields.length > 1 ? remove : null}
          </div>
        </Form.Item>
      );
    });

    const itemProps = {
      wrapperCol: {
        offset: 6,
        span: 18,
      },
    };

    return (
      <>
        {nodes}
        <Form.Item className={styles.add} {...itemProps}>
          <Button className={styles.button} type="dashed" onClick={() => operation.add()}>
            <PlusOutlined />
            {formatMessage({ id: 'dashboard.upstream.form.nodes.add' })}
          </Button>
        </Form.Item>
      </>
    );
  };

  return <Form.List name="nodes">{render}</Form.List>;
});

const Submit = React.memo(props => {
  const { loading } = props;

  const { formatMessage } = useIntl();

  const handleClick = React.useCallback(() => history.push('/dashboard/upstream'), []);

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
        {formatMessage({ id: 'dashboard.upstream.form.submit' })}
      </Button>
      <Button className={styles.button} htmlType="button" onClick={handleClick}>
        {formatMessage({ id: 'dashboard.upstream.form.cancel' })}
      </Button>
    </Form.Item>
  );
});

const EditForm = React.memo(props => {
  const { className, loading, record, onSubmit } = props;

  const { formatMessage } = useIntl();

  const handleFinish = React.useCallback(
    values => {
      if (!hasArray(values.nodes)) {
        return message.error(formatMessage({ id: 'dashboard.upstream.form.nodes.node.required' }));
      }

      return onSubmit({
        key: record.key,
        ...values,
      }).then(() =>
        message.success(
          formatMessage({ id: `dashboard.upstream.form.${hasString(record.key) ? 'edit' : 'add'}.success` })
        )
      );
    },
    [formatMessage, onSubmit, record.key]
  );

  // const [form] = Form.useForm();

  const formProps = {
    // component: ,
    // colon: ,
    // fields: ,
    // form,
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
      <Type />
      <HashOn />
      <HashKey />
      <Websocket />
      <Nodes />
      <Submit loading={loading} />
    </Form>
  );
});

// EditForm.propTypes = {};

EditForm.defaultProps = {
  record: {},
};

export default EditForm;
