import * as React from 'react';
import {memo} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import {Avatar, Box, Typography} from '@mui/material'
import {styled} from "@mui/material/styles";
import {SwitchModeButton} from "./SwitchModeButton";
import Logo from '../../assets/logo.png';

const HeaderWrapper = styled(Card)(() => ({
  position: "sticky",
  top: 0,
  zIndex: 1399,
  width: '100%'
}));

export const Header = memo(() => {
  return (
    <HeaderWrapper>
      <CardHeader
        avatar={<Avatar src={Logo}/>}
        action={
          <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <SwitchModeButton/>
          </Box>
        }
        title={<Typography variant={"h1"}>{("titleLogo")}</Typography>}
      />
    </HeaderWrapper>
  );
})

Header.displayName = "Header"
