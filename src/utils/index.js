import { reduce } from 'lodash-es';

export const actionTypeCreator = actionsTypes =>
  reduce(actionsTypes, (result, value) => ({ ...result, [value]: value }), {});
