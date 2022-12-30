import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {deepPurple} from '@mui/material/colors';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import Slider from '@mui/material/Slider';
import CheckIcon from '@mui/icons-material/Check';

const KnowlageWorkspaceContainer = styled(Box)(({theme}) => ({
  display: "grid",
  gridTemplateColumns: "1fr 7fr",
  gridTemplateRows: "1fr",
  gridAutoFlow: "row",
  height: "100%",
  gap: theme.spacing(2)
}))

const ItemFor = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#1A2027"
}))

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// TODO: 'вынести разделяющую линию'
// TODO: 'вынести диаграмму Languages и Coding'

export default function PersonalCard() {
  return (
    <Card sx={{maxWidth: 311, bgcolor: '#24242f'}}>
      <Stack direction="row" sx={{display: 'flex', justifyContent: 'center', m: 4}}>
        <Avatar sx={{bgcolor: deepPurple[500]}}>AM</Avatar>
      </Stack>

      <CardContent sx={{m: 0}}>
        <Typography gutterBottom variant="h5" component="div" sx={{display: 'flex', justifyContent: 'center', m: 0}}>
          Artem Musaelyan
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{display: 'flex', justifyContent: 'center'}}>
          Front-end Developer
        </Typography>
      </CardContent>

      <CardContent sx={{bgcolor: '#20202a'}}>
        <Box sx={{flexGrow: 1}}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <Item sx={{display: 'flex', justifyContent: 'start'}}>Residence:</Item>
              <Item sx={{display: 'flex', justifyContent: 'start'}}>City:</Item>
              <Item sx={{display: 'flex', justifyContent: 'start'}}>Age:</Item>
            </Grid>
            <Grid item xs={8}>
              <Item sx={{display: 'flex', justifyContent: 'end'}}>Russia</Item>
              <Item sx={{display: 'flex', justifyContent: 'end'}}>Krasnodar</Item>
              <Item sx={{display: 'flex', justifyContent: 'end'}}>17</Item>
            </Grid>
          </Grid>
        </Box>

        <Container maxWidth="md">
          <Box sx={{bgcolor: '#303038', height: '0.5vh', margin: 3}}/>
        </Container>

        <Box>
          <Typography>Languages:</Typography>
        </Box>

        <Box sx={{width: 260, mt: 5}}>
          <Typography>Russian</Typography>
          <Slider disabled defaultValue={100} aria-label="Disabled slider"/>
          <Typography>English</Typography>
          <Slider disabled defaultValue={75} aria-label="Disabled slider"/>
        </Box>

        <Container maxWidth="md">
          <Box sx={{bgcolor: '#303038', height: '0.5vh', margin: 3}}/>
        </Container>

        <Box>
          <Typography>Coding:</Typography>
        </Box>

        <Box sx={{width: 260, mt: 5}}>
          <Typography>html</Typography>
          <Slider defaultValue={100}/>

          <Typography>css/sass/scss</Typography>
          <Slider defaultValue={100}/>

          <Typography>javascript</Typography>
          <Slider defaultValue={80}/>

          <Typography>typescript</Typography>
          <Slider defaultValue={75}/>

          <Typography>react technology</Typography>
          <Slider defaultValue={80}/>
        </Box>

        <Container maxWidth="md">
          <Box sx={{bgcolor: '#303038', height: '0.5vh', margin: 3}}/>
        </Container>

        <Box>
          <Typography>Knowledge:</Typography>
        </Box>

        <KnowlageWorkspaceContainer>
          <ItemFor><CheckIcon/></ItemFor>
          <ItemFor><Typography> Bootstrap</Typography></ItemFor>
        </KnowlageWorkspaceContainer>

        <KnowlageWorkspaceContainer>
          <ItemFor><CheckIcon/></ItemFor>
          <ItemFor><Typography> MUI/sass/scss</Typography></ItemFor>
        </KnowlageWorkspaceContainer>

        <KnowlageWorkspaceContainer>
          <ItemFor><CheckIcon/></ItemFor>
          <ItemFor><Typography> GIT knowledge</Typography></ItemFor>
        </KnowlageWorkspaceContainer>

      </CardContent>
    </Card>
  );
}