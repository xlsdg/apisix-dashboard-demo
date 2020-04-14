import React from 'react';
// import { formatMessage } from 'umi';
import { Result, Button } from 'antd';

import styles from './index.less';

const Page = React.memo(props => {
  // const {  } = props;
  return (
    <div className={styles.container}>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Go Login</Button>}
      />
    </div>
  );
});

Page.propTypes = {};

Page.defaultProps = {};

Page.title = 'page.403.title';

export default Page;
