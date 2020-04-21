import React from 'react';
// import { formatMessage } from 'umi';
import { Result, Button } from 'antd';

import styles from './index.less';

function Body(props) {
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
}

Body.propTypes = {};

Body.defaultProps = {};

const Page = React.memo(Body);

Page.title = 'page.403.title';

export default Page;
