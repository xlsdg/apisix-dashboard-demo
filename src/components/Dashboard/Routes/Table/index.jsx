import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { history, useIntl } from 'umi';
import { Table, Button, Divider } from 'antd';

import Delete from '@/components/Dashboard/Routes/Delete';
import { pluginsRender } from '@/components/Dashboard/Consumers/Table';

import { hasArray } from '@/utils/helper';

import styles from './index.less';

const Action = React.memo(props => {
  const { record } = props;

  const { formatMessage } = useIntl();

  const handleClick = React.useCallback(() => history.push(`/dashboard/routes/edit/${record.key}`), [record.key]);

  return (
    <div className={styles.action}>
      <Button type="link" size="small" onClick={handleClick}>
        {formatMessage({ id: 'dashboard.routes.edit' })}
      </Button>
      <Divider type="vertical" />
      <Delete recordId={record.id} recordKey={record.key} />
    </div>
  );
});

function actionsRender(text, record, index) {
  return <Action record={record} />;
}

function arrayRender(text, record, index) {
  return hasArray(text) ? _.join(text, ', ') : '';
}

function keyRender(text, record, index) {
  return _.trimStart(text, '0');
}

const DataTable = React.memo(props => {
  const { loading, dataSource } = props;

  const { formatMessage } = useIntl();

  const columns = [
    {
      // align: 'left',
      ellipsis: false,
      // className: ,
      // colSpan: '',
      dataIndex: 'id',
      // defaultFilteredValue: ,
      // defaultSortOrder: '',
      // filterDropdown: '',
      // filterDropdownVisible: '',
      // filtered: '',
      // filteredValue: '',
      // filterIcon: '',
      // filterMultiple: '',
      // filters: '',
      fixed: 'left',
      // key: '',
      // render: ,
      // sorter: '',
      // sortOrder: '',
      // sortDirections: '',
      title: formatMessage({ id: 'dashboard.routes.col.id' }),
      // width: '25%',
      // onCell: '',
      // onFilter: '',
      // onFilterDropdownVisibleChange: '',
      // onHeaderCell: '',
      // showSorterTooltip: ,
    },
    {
      ellipsis: true,
      dataIndex: 'description',
      title: formatMessage({ id: 'dashboard.routes.col.description' }),
    },
    {
      ellipsis: true,
      dataIndex: 'uris',
      render: arrayRender,
      title: formatMessage({ id: 'dashboard.routes.col.uris' }),
    },
    {
      ellipsis: true,
      dataIndex: 'hosts',
      render: arrayRender,
      title: formatMessage({ id: 'dashboard.routes.col.hosts' }),
    },
    {
      ellipsis: true,
      dataIndex: 'remoteAddress',
      title: formatMessage({ id: 'dashboard.routes.col.remote.address' }),
    },
    {
      ellipsis: true,
      dataIndex: 'upstream',
      render: keyRender,
      title: formatMessage({ id: 'dashboard.routes.col.upstream' }),
    },
    {
      ellipsis: true,
      dataIndex: 'service',
      render: keyRender,
      title: formatMessage({ id: 'dashboard.routes.col.service' }),
    },
    {
      ellipsis: true,
      dataIndex: 'methods',
      render: arrayRender,
      title: formatMessage({ id: 'dashboard.routes.col.methods' }),
    },
    {
      ellipsis: true,
      dataIndex: 'plugins',
      render: pluginsRender,
      title: formatMessage({ id: 'dashboard.routes.col.plugins' }),
    },
    {
      align: 'center',
      ellipsis: false,
      fixed: 'right',
      render: actionsRender,
      title: formatMessage({ id: 'dashboard.routes.col.actions' }),
    },
  ];

  const tableProps = {
    // tableLayout: 'fixed',
    bordered: true,
    columns,
    // components: ,
    dataSource,
    // expandable: ,
    // footer: ,
    loading,
    // locale: ,
    pagination: false,
    // rowClassName: ,
    rowKey: 'key',
    // rowSelection: ,
    scroll: { x: 1400 },
    // showHeader: ,
    size: 'small',
    // summary: ,
    // title: ,
    // onChange: ,
    // onHeaderRow: ,
    // onRow: ,
    // getPopupContainer: ,
    // sortDirections: ,
    // showSorterTooltip: ,
  };

  return (
    <div className={styles.container}>
      <Table className={styles.table} {...tableProps} />
    </div>
  );
});

// DataTable.propTypes = {};

DataTable.defaultProps = {
  dataSource: [],
};

export default DataTable;
