import { createAction } from '@reduxjs/toolkit';

export const extraActions = {
  /**
   * Purge all data in redux store.
   * Restore initial state for all reducers
   */
  purge: createAction<void>('redux@purge'),
};
