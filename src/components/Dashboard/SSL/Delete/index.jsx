// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { message, Modal, Button } from 'antd';
import { useIntl } from 'umi';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { createUseDispatchSelector } from '@/redux/actions/ssl';

// import styles from './index.less';

const useDispatchSelector = createUseDispatchSelector(['deleteRecord']);

function Delete(props) {
  const { recordId, recordKey } = props;

  const [{ deleteRecord }] = useDispatchSelector();

  const { formatMessage } = useIntl();

  const handleClick = React.useCallback(() => {
    const handleOk = () => {
      deleteRecord({ key: recordKey }).then(() =>
        message.success(formatMessage({ id: 'dashboard.ssl.delete.success' }, { id: recordId }))
      );
      return; // 不返回 Promise，立即关闭弹窗
    };

    return Modal.confirm({
      title: formatMessage({ id: 'dashboard.ssl.delete.title' }),
      icon: <ExclamationCircleOutlined />,
      content: formatMessage({ id: 'dashboard.ssl.delete.content' }, { id: recordId }),
      okText: formatMessage({ id: 'dashboard.ssl.delete.ok' }),
      okType: 'danger',
      cancelText: formatMessage({ id: 'dashboard.ssl.delete.cancel' }),
      onOk: handleOk,
    });
  }, [deleteRecord, formatMessage, recordId, recordKey]);

  return (
    <Button type="link" size="small" danger onClick={handleClick}>
      {formatMessage({ id: 'dashboard.ssl.delete' })}
    </Button>
  );
}

// Delete.propTypes = {};

Delete.defaultProps = {};

export default React.memo(Delete);
