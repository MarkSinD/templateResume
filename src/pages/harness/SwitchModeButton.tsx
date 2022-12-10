import { Box, IconButton, useTheme } from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import * as React from 'react'
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {themeSliceActions} from "../../redux/store/theme/themeSlice";
import {memo, useCallback} from "react";

export const SwitchModeButton = memo(() => {
  const theme = useTheme()
  const colorScheme = useAppSelector((state) => state.theme.mode)
  const appDispatch = useAppDispatch()

  const handleChange = useCallback(() => {
    appDispatch(
      themeSliceActions.changeColorScheme(
        colorScheme === 'light' ? 'dark' : 'light',
      ),
    )
  }, [colorScheme])

  const isChecked = (color: string) => {
    return color === 'light'
  }

  return (
    <Box>
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => handleChange()}
        color="inherit"
      >
        {isChecked(colorScheme) ? <DarkModeIcon /> : <WbSunnyIcon />}
      </IconButton>
    </Box>
  )
})

SwitchModeButton.displayName = 'SwitchModeButton'
