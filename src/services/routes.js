import Fetch from '@/utils/fetch';

export default {
  getRecords: Fetch.internal.auth.get('/apisix/admin/routes'),

  addRecord: Fetch.internal.auth.post('/apisix/admin/routes'),
  deleteRecord: key => Fetch.internal.auth.delete(`/apisix/admin/routes/${key}`),
  editRecord: key => Fetch.internal.auth.put(`/apisix/admin/routes/${key}`),
  getRecord: key => Fetch.internal.auth.get(`/apisix/admin/routes/${key}`),
};
