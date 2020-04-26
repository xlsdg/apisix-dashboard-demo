import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { useIntl } from 'umi';
import { Form, Button, Modal } from 'antd';
import { PlusOutlined, MinusCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

// import { hasValue } from '@/utils/helper';

import styles from './index.less';

const PluginModal = React.memo(props => {
  const { initialValues = {}, visible, onOk, onCancel } = props;
  console.log(initialValues);
  const { formatMessage } = useIntl();

  const modalProps = {
    // afterClose,
    // bodyStyle: ,
    cancelText: formatMessage({ id: 'dashboard.consumers.form.plugins.modal.cancel' }),
    centered: true,
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
    width: 500,
    // wrapClassName: ,
    // zIndex: ,
    onCancel,
    onOk,
  };

  return (
    <Modal wrapClassName={styles.modal} {...modalProps}>
      <div>123</div>
    </Modal>
  );
});

const Plugin = React.memo(props => {
  const { value, onChange } = props;
  // const { formatMessage } = useIntl();

  const [visible, setVisible] = React.useState(false);

  const handleClick = React.useCallback(() => setVisible(true), []);
  const handleCancel = React.useCallback(() => setVisible(false), []);

  return (
    <>
      <Button onClick={handleClick}>{value[0]}</Button>
      <PluginModal visible={visible} initialValues={value} onOk={onChange} onCancel={handleCancel} />
    </>
  );
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
  const [visible, setVisible] = React.useState(false);
  const showPluginModal = React.useCallback(() => setVisible(true), []);
  const hidePluginModal = React.useCallback(() => setVisible(false), []);

  const { formatMessage } = useIntl();

  const render = React.useCallback(
    (fields, operation) => {
      const editPlugin = values => {};

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
              <Form.Item className={styles.host} {...pluginProps}>
                <Plugin onClick={editPlugin} />
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
              const existPlugins = _.map(form.getFieldValue('plugins'), plugin => plugin[0]);
              return (
                <>
                  <Button className={styles.button} type="dashed" onClick={showPluginModal}>
                    <PlusOutlined />
                    {formatMessage({ id: 'dashboard.consumers.form.plugins.add' })}
                  </Button>
                  <PluginModal
                    existPlugins={existPlugins}
                    visible={visible}
                    onOk={operation.add}
                    onCancel={hidePluginModal}
                  />
                </>
              );
            }}
          </Form.Item>
        </>
      );
    },
    [formatMessage, hidePluginModal, showPluginModal, visible]
  );

  return <Form.List name="plugins">{render}</Form.List>;
}

// Plugins.propTypes = {};

Plugins.defaultProps = {};

export default React.memo(Plugins);
