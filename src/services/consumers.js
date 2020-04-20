import Fetch from '@/utils/fetch';

export default {
  getRecords: Fetch.internal.auth.get('/apisix/admin/consumers'),

  addRecord: Fetch.internal.auth.post('/apisix/admin/consumers'),
  deleteRecord: key => Fetch.internal.auth.delete(`/apisix/admin/consumers/${key}`),
  editRecord: key => Fetch.internal.auth.put(`/apisix/admin/consumers/${key}`),
  getRecord: key => Fetch.internal.auth.get(`/apisix/admin/consumers/${key}`),
};
