import { defaultAction } from './state/actions';

export const modalsConfig = id =>
  ({
    default: {
      title: 'Modal',
      texts: 'Default text',
      actions: [
        {
          actionText: 'Action',
          action: defaultAction,
        },
      ],
    },
  }[id]);
