import { currentBackend } from '../backend';
import { addNotification, dismissNotification } from './notifications';
export const STATUS_REQUEST = 'STATUS_REQUEST';
export const STATUS_SUCCESS = 'STATUS_SUCCESS';
export const STATUS_FAILURE = 'STATUS_FAILURE';
export function statusRequest() {
  return {
    type: STATUS_REQUEST
  };
}
export function statusSuccess(status) {
  return {
    type: STATUS_SUCCESS,
    payload: {
      status
    }
  };
}
export function statusFailure(error) {
  return {
    type: STATUS_FAILURE,
    payload: {
      error
    }
  };
}
export function checkBackendStatus() {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      if (state.status.isFetching) {
        return;
      }
      dispatch(statusRequest());
      const backend = currentBackend(state.config);
      const status = await backend.status();
      const backendDownKey = 'ui.toast.onBackendDown';
      const previousBackendDownNotifications = state.notifications.notifications.filter(n => typeof n.message != 'string' && n.message?.key === backendDownKey);
      if (status.api.status === false) {
        if (previousBackendDownNotifications.length === 0) {
          dispatch(addNotification({
            message: {
              details: status.api.statusPage,
              key: 'ui.toast.onBackendDown'
            },
            type: 'error'
          }));
        }
        return dispatch(statusSuccess(status));
      } else if (status.api.status === true && previousBackendDownNotifications.length > 0) {
        // If backend is up, clear all the danger messages
        previousBackendDownNotifications.forEach(notification => {
          dispatch(dismissNotification(notification.id));
        });
      }
      const authError = status.auth.status === false;
      if (authError) {
        const key = 'ui.toast.onLoggedOut';
        const existingNotification = state.notifications.notifications.find(n => typeof n.message != 'string' && n.message?.key === key);
        if (!existingNotification) {
          dispatch(addNotification({
            message: {
              key: 'ui.toast.onLoggedOut'
            },
            type: 'error'
          }));
        }
      }
      dispatch(statusSuccess(status));
    } catch (error) {
      dispatch(statusFailure(error));
    }
  };
}