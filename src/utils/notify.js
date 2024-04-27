import { toast } from 'react-toastify';

export const notify = (message, position = 'top-right') =>
    toast.success(message, {
        position: position,
    });

export const notifyError = (message) =>
    toast.error(message, {
        position: 'top-right',
        theme: 'colored',
    });
