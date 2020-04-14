import Consumers from '@/locales/en-US/consumers';
import Routes from '@/locales/en-US/routes';
import Services from '@/locales/en-US/services';
import Ssl from '@/locales/en-US/ssl';
import Upstream from '@/locales/en-US/upstream';
import User from '@/locales/en-US/user';

export default {
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
