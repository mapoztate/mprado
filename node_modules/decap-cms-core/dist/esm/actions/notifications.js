export const NOTIFICATION_SEND = 'NOTIFICATION_SEND';
export const NOTIFICATION_DISMISS = 'NOTIFICATION_DISMISS';
export const NOTIFICATIONS_CLEAR = 'NOTIFICATION_CLEAR';
function addNotification(notification) {
  return {
    type: NOTIFICATION_SEND,
    payload: notification
  };
}
function dismissNotification(id) {
  return {
    type: NOTIFICATION_DISMISS,
    id
  };
}
function clearNotifications() {
  return {
    type: NOTIFICATIONS_CLEAR
  };
}
export { addNotification, dismissNotification, clearNotifications };