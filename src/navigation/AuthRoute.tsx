import * as React from 'react';
import {ReactNode} from 'react';
import {Box} from "@mui/material";
import {Header} from "../pages/harness/Header";
import {styled} from "@mui/material/styles";

interface Props {
  children?: ReactNode
}

const Container = styled(Box)(({theme}) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr",
  height: "100vh",
  gap: theme.spacing(2)
}))

export const AuthRoute = ({children}: Props) => {
  // ToDo: do some auth things
  return (
    <Container>
      <Header/>
      {children}
    </Container>
  )
};
