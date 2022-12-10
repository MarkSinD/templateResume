import * as React from 'react'
import {IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {SnackbarOrigin, useSnackbar as useSnackBarNotistack} from "notistack";

interface Props {
  id: number
}

export const ActionClose = ({id}: Props) => {
  const {closeSnackbar} = useSnackBarNotistack();
  return (
    <IconButton onClick={() => closeSnackbar(id)} size="large">
      <CloseIcon/>
    </IconButton>
  );
}

const actionClose = (key: number) => <ActionClose id={key}/>;

const snackbarOrigin: SnackbarOrigin = {
  horizontal: "right",
  vertical: "top"
}

export const snackbarProviderProps = {
  autoHideDuration: 3000,
  action: actionClose,
  anchorOrigin: snackbarOrigin,
};
