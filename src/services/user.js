import Fetch from '@/utils/fetch';

export default {
  getData: Fetch.internal.api.get('/apisix/admin/user'),
};
