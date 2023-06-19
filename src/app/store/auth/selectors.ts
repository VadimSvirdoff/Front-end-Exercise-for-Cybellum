import { RootState } from '..';

export const selectUser = (state: RootState) => state.auth.user;
export const selectError = (state: RootState) => state.auth.error;
