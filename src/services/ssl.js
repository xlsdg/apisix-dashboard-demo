import Fetch from '@/utils/fetch';

export default {
  getRecords: Fetch.internal.auth.get('/apisix/admin/ssl'),

  addRecord: Fetch.internal.auth.post('/apisix/admin/ssl'),
  deleteRecord: key => Fetch.internal.auth.delete(`/apisix/admin/ssl/${key}`),
  editRecord: key => Fetch.internal.auth.put(`/apisix/admin/ssl/${key}`),
  getRecord: key => Fetch.internal.auth.get(`/apisix/admin/ssl/${key}`),
};
