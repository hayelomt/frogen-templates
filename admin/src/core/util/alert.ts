import { showNotification } from '@mantine/notifications';

type ToastPayload = {
  title: string;
  message?: string;
};

export const toastSuccess = ({ title, message }: ToastPayload) => {
  showNotification({
    title,
    message,
  });
};

export const toastError = ({ title, message }: ToastPayload) => {
  showNotification({
    title,
    message,
    color: 'red',
  });
};
