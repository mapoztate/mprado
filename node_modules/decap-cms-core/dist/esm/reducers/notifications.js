import { produce } from 'immer';
import { v4 as uuid } from 'uuid';
import { NOTIFICATION_SEND, NOTIFICATION_DISMISS, NOTIFICATIONS_CLEAR } from '../actions/notifications';
const defaultState = {
  notifications: []
};
const notifications = produce((state, action) => {
  switch (action.type) {
    case NOTIFICATIONS_CLEAR:
      state.notifications = [];
      break;
    case NOTIFICATION_DISMISS:
      state.notifications = state.notifications.filter(n => n.id !== action.id);
      break;
    case NOTIFICATION_SEND:
      state.notifications = [...state.notifications, {
        id: uuid(),
        ...action.payload
      }];
      break;
  }
}, defaultState);
export default notifications;