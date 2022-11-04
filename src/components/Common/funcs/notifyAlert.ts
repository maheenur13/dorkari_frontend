import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const notifyAlert = (type: NotificationType,title:string | string[],description?: string | string[]) => {
  notification[type]({
    message: title || 'Title',
    description:description || null,
  });
};