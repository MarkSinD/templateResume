import {useSnackbar as useSnackBarNotistack} from "notistack";

export const useSnackbar = () => {
  const {enqueueSnackbar} = useSnackBarNotistack();
  const showError = (message: string) => {
    enqueueSnackbar(message, {
      preventDuplicate: true,
      variant: "error"
    })
  }

  const showSuccess = (message: string) => {
    enqueueSnackbar(message, {
      preventDuplicate: true,
      variant: "success"
    })
  }
  return {
    showSuccess,
    showError
  }
}