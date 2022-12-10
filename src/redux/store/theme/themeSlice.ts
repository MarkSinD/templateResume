import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { PaletteMode } from '@mui/material'

interface ThemeState {
  mode: PaletteMode,
}

export const initialState: ThemeState = {
  mode: 'dark',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    changeColorScheme(state, action: PayloadAction<PaletteMode>) {
      state.mode = action.payload
    },
  },
})

export const themeSliceActions = themeSlice.actions
