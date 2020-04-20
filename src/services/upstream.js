import Fetch from '@/utils/fetch';

export default {
  getRecords: Fetch.internal.auth.get('/apisix/admin/upstreams'),

  addRecord: Fetch.internal.auth.post('/apisix/admin/upstreams'),
  deleteRecord: key => Fetch.internal.auth.delete(`/apisix/admin/upstreams/${key}`),
  editRecord: key => Fetch.internal.auth.put(`/apisix/admin/upstreams/${key}`),
  getRecord: key => Fetch.internal.auth.get(`/apisix/admin/upstreams/${key}`),
};
