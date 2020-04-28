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
  'page.403.sub.title': 'Sorry, you are not authorized to access this page.',
  'page.403.back': 'Go Login',

  'page.404.title': '404',
  'page.404.sub.title': 'Sorry, the page you visited does not exist.',
  'page.404.back': 'Back Home',
};
