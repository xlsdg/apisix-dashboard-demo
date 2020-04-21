// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { history, useIntl } from 'umi';
import { Table, Button, Divider } from 'antd';

import Delete from '@/components/Dashboard/Consumers/Delete';

import styles from './index.less';

const Action = React.memo(props => {
  const { record } = props;

  const { formatMessage } = useIntl();

  const handleClick = React.useCallback(() => history.push(`/dashboard/consumers/edit/${record.key}`), [record.key]);

  return (
    <div className={styles.action}>
      <Button type="link" size="small" onClick={handleClick}>
        {formatMessage({ id: 'dashboard.consumers.edit' })}
      </Button>
      <Divider type="vertical" />
      <Delete recordId={record.id} recordKey={record.key} />
    </div>
  );
});

function actionsRender(text, record, index) {
  return <Action record={record} />;
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
      // fixed: '',
      // key: '',
      // render: ,
      // sorter: '',
      // sortOrder: '',
      // sortDirections: '',
      title: formatMessage({ id: 'dashboard.consumers.col.id' }),
      // width: '25%',
      // onCell: '',
      // onFilter: '',
      // onFilterDropdownVisibleChange: '',
      // onHeaderCell: '',
      // showSorterTooltip: ,
    },
    {
      ellipsis: true,
      dataIndex: 'username',
      title: formatMessage({ id: 'dashboard.consumers.col.username' }),
    },
    {
      ellipsis: true,
      dataIndex: 'description',
      title: formatMessage({ id: 'dashboard.consumers.col.description' }),
    },
    {
      ellipsis: true,
      dataIndex: 'plugins',
      title: formatMessage({ id: 'dashboard.consumers.col.plugins' }),
    },
    {
      ellipsis: false,
      align: 'center',
      render: actionsRender,
      title: formatMessage({ id: 'dashboard.consumers.col.actions' }),
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
    // scroll: ,
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
