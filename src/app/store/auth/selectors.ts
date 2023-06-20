import { RootState } from '..';

export const selectUser = (state: RootState) => state.auth.user;
export const selectNotification = (state: RootState) => state.auth.notification;
export const selectError = (state: RootState) => state.auth.error;
