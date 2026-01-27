// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
// import { translate } from 'react-polyglot';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { toast, ToastContainer } from 'react-toastify';
import { connect, useDispatch } from 'react-redux';
import { useTranslate } from 'react-polyglot';
import { dismissNotification } from '../../actions/notifications';
import { jsx as ___EmotionJSX } from "@emotion/react";
injectStyle();
function Notifications({
  notifications
}) {
  const t = useTranslate();
  const dispatch = useDispatch();
  const [idMap, setIdMap] = React.useState({});
  useEffect(() => {
    notifications.filter(notification => !idMap[notification.id]).forEach(notification => {
      const toastId = toast(typeof notification.message == 'string' ? notification.message : t(notification.message.key, {
        ...notification.message
      }), {
        autoClose: notification.dismissAfter,
        type: notification.type
      });
      idMap[notification.id] = toastId;
      setIdMap(idMap);
      if (notification.dismissAfter) {
        setTimeout(() => {
          dispatch(dismissNotification(notification.id));
        }, notification.dismissAfter);
      }
    });
    Object.entries(idMap).forEach(([id, toastId]) => {
      if (!notifications.find(notification => notification.id === id)) {
        toast.dismiss(toastId);
        delete idMap[id];
        setIdMap(idMap);
      }
    });
  }, [notifications]);
  toast.onChange(payload => {
    if (payload.status == 'removed') {
      const id = Object.entries(idMap).find(([, toastId]) => toastId === payload.id)?.[0];
      if (id) {
        dispatch(dismissNotification(id));
      }
    }
  });
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(ToastContainer, {
    position: "top-right",
    theme: "colored",
    className: "notif__container"
  }));
}
function mapStateToProps({
  notifications
}) {
  return {
    notifications: notifications.notifications
  };
}
export default connect(mapStateToProps)(Notifications);