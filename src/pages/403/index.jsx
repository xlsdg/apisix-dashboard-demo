import React from 'react';
import { history, useIntl } from 'umi';
import { Result, Button } from 'antd';

import styles from './index.less';

function Body(props) {
  // const {  } = props;

  const { formatMessage } = useIntl();

  const handleClick = React.useCallback(() => history.push('/user/login'), []);
  const extra = (
    <Button type="primary" onClick={handleClick}>
      {formatMessage({ id: 'page.403.back' })}
    </Button>
  );

  return (
    <div className={styles.container}>
      <Result
        status="403"
        title={formatMessage({ id: 'page.403.title' })}
        subTitle={formatMessage({ id: 'page.403.sub.title' })}
        extra={extra}
      />
    </div>
  );
}

// Body.propTypes = {};

Body.defaultProps = {};

const Page = React.memo(Body);

Page.title = 'page.403.title';

export default Page;
