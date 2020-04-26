import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { useIntl } from 'umi';
import { Form, Button, Modal } from 'antd';
import { PlusOutlined, MinusCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import PluginForm from '@/components/Dashboard/Consumers/Plugin';

import { useAutoFetch } from '@/utils/hook';
import { hasPlainObject, hasArray } from '@/utils/helper';

import { getPlugins } from '@/transforms/consumers';

import styles from './index.less';

const PluginModal = React.memo(props => {
  const { data, visible, onCancel } = props;

  const [form] = Form.useForm();

  const handleOk = React.useCallback(
    () =>
      form
        .validateFields()
        .then(values => {
          form.resetFields();
          data.callback(values);
        })
        .catch(() => {}),
    [data, form]
  );

  const { formatMessage } = useIntl();

  const modalProps = {
    // afterClose,
    // bodyStyle: ,
    cancelText: formatMessage({ id: 'dashboard.consumers.form.plugins.modal.cancel' }),
    // centered: true,
    closable: true,
    // closeIcon: ,
    // confirmLoading: ,
    destroyOnClose: true,
    // footer: null,
    // forceRender: true,
    // getContainer: ,
    keyboard: false,
    mask: true,
    maskClosable: false,
    // maskStyle: ,
    okText: formatMessage({ id: 'dashboard.consumers.form.plugins.modal.ok' }),
    // okType: ,
    // okButtonProps: {},
    // cancelButtonProps: {},
    // style: ,
    title: formatMessage({ id: 'dashboard.consumers.form.plugins.modal.title' }),
    visible,
    // width: 500,
    // wrapClassName: ,
    // zIndex: ,
    onCancel,
    onOk: handleOk,
  };

  const formData = React.useMemo(
    () => ({
      plugins: data.plugins,
      config: data.config,
    }),
    [data.config, data.plugins]
  );

  React.useEffect(() => {
    if (hasArray(data.plugins)) {
      form.setFieldsValue({
        plugin: data.plugins[0],
      });
    }
  }, [data.plugins, form]);

  if (!visible) {
    return null;
  }

  return (
    <Modal wrapClassName={styles.modal} {...modalProps}>
      <PluginForm className={styles.form} form={form} data={formData} />
    </Modal>
  );
});

const Plugin = React.memo(props => {
  const { value, onChange, onClick } = props;
  // const { formatMessage } = useIntl();

  const plugin = value[0];
  const config = value[1];

  const handleClick = React.useCallback(
    () =>
      onClick({
        plugins: [plugin],
        config,
        callback: onChange,
      }),
    [config, onChange, onClick, plugin]
  );

  return <Button onClick={handleClick}>{plugin}</Button>;
});

const Remove = React.memo(props => {
  const { onClick } = props;

  const { formatMessage } = useIntl();

  const handleClick = React.useCallback(
    () =>
      Modal.confirm({
        title: formatMessage({ id: 'dashboard.consumers.form.plugins.delete.title' }),
        icon: <ExclamationCircleOutlined />,
        content: formatMessage({ id: 'dashboard.consumers.form.plugins.delete.content' }),
        okText: formatMessage({ id: 'dashboard.consumers.form.plugins.delete.ok' }),
        okType: 'danger',
        cancelText: formatMessage({ id: 'dashboard.consumers.form.plugins.delete.cancel' }),
        onOk: onClick,
      }),
    [formatMessage, onClick]
  );

  return <MinusCircleOutlined className={styles.remove} onClick={handleClick} />;
});

function Plugins(props) {
  const { response: allPlugins } = useAutoFetch({ api: getPlugins });

  const [modal, setModal] = React.useState({});

  const { formatMessage } = useIntl();

  const render = React.useCallback(
    (fields, operation) => {
      const plugins = _.map(fields, (field, index) => {
        const remove = <Remove onClick={() => operation.remove(field.name)} />;

        const pluginProps = {
          fieldKey: [field.fieldKey],
          name: [field.name],
        };

        return (
          <Form.Item
            key={field.key}
            className={styles.plugin}
            label={`${formatMessage({ id: 'dashboard.consumers.form.plugins' })} ${index + 1}`}
          >
            <div className={styles.row}>
              <Form.Item className={styles.item} {...pluginProps}>
                <Plugin onClick={setModal} />
              </Form.Item>
              {remove}
            </div>
          </Form.Item>
        );
      });

      const itemProps = {
        shouldUpdate: (prevValues, currValues) => {
          const prevPlugins = _.map(prevValues.plugins, plugin => plugin[0]);
          const currPlugins = _.map(currValues.plugins, plugin => plugin[0]);
          return !_.isEqual(prevPlugins, currPlugins);
        },
        wrapperCol: {
          offset: 6,
          span: 18,
        },
      };

      return (
        <>
          {plugins}
          <Form.Item className={styles.add} {...itemProps}>
            {form => {
              const hidePluginModal = () => setModal({});

              const handleAdd = () => {
                const existPlugins = _.map(form.getFieldValue('plugins'), plugin => plugin[0]);
                const newPlugins = _.filter(allPlugins, plugin => !_.includes(existPlugins, plugin));
                setModal({
                  plugins: newPlugins,
                  config: {},
                  callback: operation.add,
                });
              };

              return (
                <>
                  <Button className={styles.button} type="dashed" onClick={handleAdd}>
                    <PlusOutlined />
                    {formatMessage({ id: 'dashboard.consumers.form.plugins.add' })}
                  </Button>
                  <PluginModal data={modal} visible={hasPlainObject(modal)} onCancel={hidePluginModal} />
                </>
              );
            }}
          </Form.Item>
        </>
      );
    },
    [allPlugins, formatMessage, modal]
  );

  return <Form.List name="plugins">{render}</Form.List>;
}

// Plugins.propTypes = {};

Plugins.defaultProps = {};

export default React.memo(Plugins);
