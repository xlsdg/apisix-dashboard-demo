// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { history, useIntl } from 'umi';
import { Table, Button, Divider } from 'antd';

import { hasValue } from '@/utils/helper';

import styles from './index.less';

function rowSpanRender(text, record, index) {
  const obj = {
    children: text,
    props: {},
  };

  if (hasValue(record.rowSpan)) {
    obj.props.rowSpan = record.rowSpan;
  }

  return obj;
}

const Action = React.memo(props => {
  const { record } = props;

  const { formatMessage } = useIntl();

  const handleClick = React.useCallback(() => history.push(`/dashboard/upstream/edit/${record.key}`), [record.key]);

  return (
    <div className={styles.action}>
      <Button type="link" size="small" onClick={handleClick}>
        {formatMessage({ id: 'dashboard.upstream.edit' })}
      </Button>
      <Divider type="vertical" />
      <Button type="link" size="small" danger>
        {formatMessage({ id: 'dashboard.upstream.delete' })}
      </Button>
    </div>
  );
});

function actionsRender(text, record, index) {
  return rowSpanRender(<Action record={record} />, record, index);
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
      render: rowSpanRender,
      // sorter: '',
      // sortOrder: '',
      // sortDirections: '',
      title: formatMessage({ id: 'dashboard.upstream.col.id' }),
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
      render: rowSpanRender,
      title: formatMessage({ id: 'dashboard.upstream.col.description' }),
    },
    {
      ellipsis: true,
      dataIndex: 'type',
      render: rowSpanRender,
      title: formatMessage({ id: 'dashboard.upstream.col.type' }),
    },
    {
      title: formatMessage({ id: 'dashboard.upstream.col.nodes' }),
      children: [
        {
          dataIndex: ['node', 'host'],
          title: formatMessage({ id: 'dashboard.upstream.col.host' }),
        },
        {
          dataIndex: ['node', 'port'],
          title: formatMessage({ id: 'dashboard.upstream.col.port' }),
        },
        {
          dataIndex: ['node', 'weights'],
          title: formatMessage({ id: 'dashboard.upstream.col.weights' }),
        },
      ],
    },
    {
      align: 'center',
      ellipsis: false,
      render: actionsRender,
      title: formatMessage({ id: 'dashboard.upstream.col.actions' }),
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

DataTable.propTypes = {};

DataTable.defaultProps = {
  dataSource: [],
};

export default DataTable;
