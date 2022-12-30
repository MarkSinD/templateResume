import * as React from 'react'
import {memo} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box, {BoxProps} from '@mui/material/Box';
import PersonalCard from "../../personalInfo/pernoalData";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#24242f' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        borderRadius: 1,
        fontSize: '0.975rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export const SecondPage = memo(() => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'grid',
          gridAutoColumns: '1fr',
          gap: 1,
        }}
      >
        <Item sx={{ gridRow: '1', gridColumn: 'span 2' }}> <PersonalCard/> </Item>
        {/* The second non-visible column has width of 1/4 */}
        <Item sx={{ gridRow: '1', gridColumn: '3 / 9' }}> Portfolio </Item>
      </Box>
    </React.Fragment>
  );
})
SecondPage.displayName = "SecondPage"
