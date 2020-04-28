import Dashboard from '@/locales/en-US/dashboard';
import Consumers from '@/locales/en-US/consumers';
import Routes from '@/locales/en-US/routes';
import Services from '@/locales/en-US/services';
import Ssl from '@/locales/en-US/ssl';
import Upstream from '@/locales/en-US/upstream';
import User from '@/locales/en-US/user';

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
