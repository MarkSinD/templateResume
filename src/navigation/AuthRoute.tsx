import * as React from 'react';
import {ReactNode} from 'react';
import {Box} from "@mui/material";

interface Props {
  children?: ReactNode
}

export const AuthRoute = ({children}: Props) => {
  // ToDo: do some auth things
  return (
    <Box>
      {children}
    </Box>
  )
};
