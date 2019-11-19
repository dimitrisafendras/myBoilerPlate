import { I18n } from '@lib';
import { defaultModalAction } from './state/actions';

export const modalsConfig = id =>
  ({
    default: {
      title: 'Modal',
      texts: [I18n.t('appModal.textDefault')],
      actions: [
        {
          actionText: I18n.t('appModal.textDefaultPositiveAction'),
          action: defaultModalAction,
        },
      ],
    },
  }[id]);
