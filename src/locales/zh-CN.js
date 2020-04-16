import Dashboard from '@/locales/zh-CN/dashboard';
import Consumers from '@/locales/zh-CN/consumers';
import Routes from '@/locales/zh-CN/routes';
import Services from '@/locales/zh-CN/services';
import Ssl from '@/locales/zh-CN/ssl';
import Upstream from '@/locales/zh-CN/upstream';
import User from '@/locales/zh-CN/user';

export default {
  ...Dashboard,
  ...Consumers,
  ...Routes,
  ...Services,
  ...Ssl,
  ...Upstream,
  ...User,

  'page.title': 'APISIX',
  'page.403.title': '403',
  'page.404.title': '404',
};
