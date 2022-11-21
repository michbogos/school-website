import React from 'react'

import TopBar from '../components/TopBar'
import InfoCard from '../components/InfoCard'

import Stack from "@mui/material/Stack"
import {Grid, List, ListItem, Typography} from "@mui/material"
import { Button, Toolbar, IconButton, Paper} from '@mui/material'
import { Container } from '@mui/system'

import Castle from "../assets/castle.jpg"

//TODO: Add List Item component for easier item addition

export default function Homepage() {

  let gap = 4;

  return (
    <Stack style={{height:"95vh", paddingTop:"5vh"}}>
      <TopBar></TopBar>
      <img src={Castle} id="masked-text"></img>
      <Container>
        <Stack spacing={5}>
          <Grid container spacing={5}>
            <Grid item xs={gap}>
              <InfoCard title='Schule' url="school-website/schule"></InfoCard>
            </Grid>
            <Grid item xs={gap}>
              <InfoCard title ="Wir" url="school-website/wir"></InfoCard>
            </Grid>
            <Grid item xs={gap}>
              <InfoCard title="Matura" url="school-website/matura"></InfoCard>
            </Grid>
            <Grid item xs={gap}>
              <InfoCard title="ORG" url="school-website/org"></InfoCard>
            </Grid>
            <Grid item xs={gap}>
              <InfoCard title="W" url="school-website/w"></InfoCard>
            </Grid>
            <Grid item xs={gap}>
              <InfoCard title="Vario" url="school-website/vario"></InfoCard>
            </Grid>
          </Grid>
          <center>
            <Typography variant='h2'>Kalender</Typography>
          </center>
          <Grid container gap={5}>
            <Grid item xs={gap}>
              <InfoCard title="Schwimmwoche"></InfoCard>
            </Grid>
            <Grid item xs={gap}>
              <InfoCard title="Schwimmwoche"></InfoCard>
            </Grid>
            <Grid item xs={gap}>
              <InfoCard title="Schwimmwoche"></InfoCard>
            </Grid>
            <Grid item xs={gap}>
              <InfoCard title="Schwimmwoche"></InfoCard>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Stack>
  )
}