import { URL_REDIRECT_SET, URL_REDIRECT_REMOVE } from './urlTypes';

export const urlRedirectSet = (from, to) => ({
    type: URL_REDIRECT_SET,
    payload: { from, to }
  });

export const urlRedirectRemove = () => ({
    type: URL_REDIRECT_REMOVE
  });
