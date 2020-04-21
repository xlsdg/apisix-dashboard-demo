import React from 'react';
// import {  } from 'umi';
import { Result, Button } from 'antd';

import styles from './index.less';

function Body(props) {
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
}

// Body.propTypes = {};

Body.defaultProps = {};

const Page = React.memo(Body);

Page.title = 'page.404.title';

export default Page;
