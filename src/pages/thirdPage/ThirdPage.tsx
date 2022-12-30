import * as React from 'react'
import {memo} from 'react'
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";

const WrapperContainer = styled(Box)(({theme}) => ({
  display: "grid",
  gridTemplateColumns: "2fr 4fr 2fr",
  gridTemplateRows: "1fr",
  gridAutoFlow: "row",
  height: "100%",
  gap: theme.spacing(2)
}))

const FirstWorkspaceContainer = styled(Box)(({theme}) => ({
  display: "grid",
  gridTemplateColumns: "2fr",
  gridTemplateRows: "1fr 1fr",
  gridAutoFlow: "row",
  height: "100%",
  gap: theme.spacing(2)
}))

const SecondWorkspaceContainer = styled(Box)(({theme}) => ({
  display: "grid",
  gridTemplateColumns: "2fr",
  gridTemplateRows: "2fr 3fr 4fr",
  gridAutoFlow: "row",
  height: "100%",
  gap: theme.spacing(2)
}))

const Item = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#fff"
}))

export const ThirdPage = memo(() => {
  return (
    <WrapperContainer>
      <FirstWorkspaceContainer>
        <Item/>
        <Item/>
      </FirstWorkspaceContainer>
      <Item/>
      <SecondWorkspaceContainer>
        <Item/>
        <Item/>
        <Item/>
      </SecondWorkspaceContainer>
    </WrapperContainer>
  );
})

ThirdPage.displayName = "ThirdPage"