import Fetch from '@/utils/fetch';

export default {
  getRecords: Fetch.internal.auth.get('/apisix/admin/services'),

  addRecord: Fetch.internal.auth.post('/apisix/admin/services'),
  deleteRecord: key => Fetch.internal.auth.delete(`/apisix/admin/services/${key}`),
  editRecord: key => Fetch.internal.auth.put(`/apisix/admin/services/${key}`),
  getRecord: key => Fetch.internal.auth.get(`/apisix/admin/services/${key}`),
};
