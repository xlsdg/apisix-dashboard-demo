import Fetch from '@/utils/fetch';

export default {
  getRecords: Fetch.internal.auth.get('/apisix/admin/upstreams'),
};
