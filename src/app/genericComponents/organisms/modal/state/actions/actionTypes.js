import { createActionTypes } from '../../../../../../store/rootReducer/utils';

const ACTION_TYPES = ['SHOW_MODAL', 'HIDE_MODAL', 'DEFAULT_ACTION'];

export const { SHOW_MODAL, HIDE_MODAL, DEFAULT_ACTION } = createActionTypes(
  ACTION_TYPES
);
