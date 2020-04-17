// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { useIntl } from 'umi';
import { Table, Button, Divider } from 'antd';

import styles from './index.less';

const Action = React.memo(props => {
  // const {  } = props;

  const { formatMessage } = useIntl();

  return (
    <>
      <Button type="link" size="small">
        {formatMessage({ id: 'dashboard.routes.edit' })}
      </Button>
      <Divider type="vertical" />
      <Button type="link" size="small" danger>
        {formatMessage({ id: 'dashboard.routes.delete' })}
      </Button>
    </>
  );
});

function actionsRender(text, record, index) {
  return <Action />;
}

const DataTable = React.memo(props => {
  const { loading, dataSource } = props;

  const { formatMessage } = useIntl();

  const columns = [
    {
      // align: 'left',
      // ellipsis: false,
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
      title: formatMessage({ id: 'dashboard.routes.col.id' }),
      // width: '25%',
      // onCell: '',
      // onFilter: '',
      // onFilterDropdownVisibleChange: '',
      // onHeaderCell: '',
      // showSorterTooltip: ,
    },
    {
      dataIndex: 'description',
      title: formatMessage({ id: 'dashboard.routes.col.description' }),
    },
    {
      dataIndex: 'uri',
      title: formatMessage({ id: 'dashboard.routes.col.uri' }),
    },
    {
      dataIndex: 'host',
      title: formatMessage({ id: 'dashboard.routes.col.host' }),
    },
    {
      dataIndex: 'remote',
      title: formatMessage({ id: 'dashboard.routes.col.remote.address' }),
    },
    {
      dataIndex: 'upstream',
      title: formatMessage({ id: 'dashboard.routes.col.upstream' }),
    },
    {
      dataIndex: 'service',
      title: formatMessage({ id: 'dashboard.routes.col.service' }),
    },
    {
      dataIndex: 'methods',
      title: formatMessage({ id: 'dashboard.routes.col.methods' }),
    },
    {
      dataIndex: 'plugins',
      title: formatMessage({ id: 'dashboard.routes.col.plugins' }),
    },
    {
      align: 'center',
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
