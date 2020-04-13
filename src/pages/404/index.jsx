import React from 'react';
// import { formatMessage } from 'umi';
import { Result, Button } from 'antd';

import styles from './index.less';

const Page = React.memo(props => {
  // const {  } = props;
  return (
    <div className={styles.container}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  );
});

Page.propTypes = {};

Page.defaultProps = {};

Page.title = 'page.404.title';

export default Page;
