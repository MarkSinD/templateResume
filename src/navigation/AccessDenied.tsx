import * as React from 'react'
import {Box} from "@mui/material";
import {memo} from "react";

export const AccessDenied = memo(() => {
  return (
    <Box> К сожалению, у вас недостаточно прав для доступа к данной странице</Box>
  )
});
AccessDenied.displayName = "AccessDenied";
