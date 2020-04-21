// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { message, Modal, Button } from 'antd';
import { connect, useIntl } from 'umi';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { dispatches as ConsumersDispatches } from '@/redux/actions/consumers';

// import styles from './index.less';

function Delete(props) {
  const { recordId, recordKey, deleteRecord } = props;

  const { formatMessage } = useIntl();

  const handleClick = React.useCallback(() => {
    const handleOk = () => {
      deleteRecord({ key: recordKey }).then(() =>
        message.success(formatMessage({ id: 'dashboard.consumers.delete.success' }, { id: recordId }))
      );
      return; // 不返回 Promise，立即关闭弹窗
    };

    return Modal.confirm({
      title: formatMessage({ id: 'dashboard.consumers.delete.title' }),
      icon: <ExclamationCircleOutlined />,
      content: formatMessage({ id: 'dashboard.consumers.delete.content' }, { id: recordId }),
      okText: formatMessage({ id: 'dashboard.consumers.delete.ok' }),
      okType: 'danger',
      cancelText: formatMessage({ id: 'dashboard.consumers.delete.cancel' }),
      onOk: handleOk,
    });
  }, [deleteRecord, formatMessage, recordId, recordKey]);

  return (
    <Button type="link" size="small" danger onClick={handleClick}>
      {formatMessage({ id: 'dashboard.consumers.delete' })}
    </Button>
  );
}

Delete.propTypes = {};

Delete.defaultProps = {};

// const loadingSelector = createLoadingSelector['deleteRecord'];

function mapStateToProps(state, ownProps) {
  return {
    // loading: loadingSelector(state.loading),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // dispatch, // 默认不打开，在这个函数里处理 dispatch
    ...ConsumersDispatches(dispatch, ['deleteRecord']),
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { recordId, recordKey } = ownProps;
  return {
    recordId,
    recordKey,
    ...stateProps,
    ...dispatchProps,
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(React.memo(Delete));
