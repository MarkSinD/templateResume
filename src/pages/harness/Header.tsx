import * as React from 'react';
import {memo} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import {Avatar, Box, Typography} from '@mui/material'
import {styled} from "@mui/material/styles";
import {useTranslation} from "react-i18next";
import {SwitchModeButton} from "./SwitchModeButton";
import Logo from '../../assets/logo.png';

const HeaderWrapper = styled(Card)(({theme}) => ({
  position: "sticky",
  top: 0,
  zIndex: 1399,
  width: '100%',
  marginBottom: theme.spacing(2),
}));

export const Header = memo(() => {
  const {t} = useTranslation(['mainPage'])
  return (
    <HeaderWrapper>
      <CardHeader
        avatar={<Avatar src={Logo}/>}
        action={
          <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <SwitchModeButton/>
          </Box>
        }
        title={<Typography variant={"h1"}>{t("titleLogo")}</Typography>}
      />
    </HeaderWrapper>
  );
})

Header.displayName = "Header"
