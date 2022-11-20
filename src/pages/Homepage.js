import React from 'react'

import TopBar from '../components/TopBar'
import InfoCard from '../components/InfoCard'

import Stack from "@mui/material/Stack"
import {Grid} from "@mui/material"
import { Button, Toolbar, IconButton, Unstable_Grid2 } from '@mui/material'
import { Container } from '@mui/system'

import Castle from "../assets/castle.jpg"


export default function Homepage() {
  return (
    <Stack style={{height:"95vh", paddingTop:"5vh"}}>
      <TopBar></TopBar>
      <img src={Castle} id="masked-text"></img>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={5}>
            <InfoCard title='Schule' url="school-website/schule"></InfoCard>
          </Grid>
          <Grid item xs={5}>
            <InfoCard title ="Wir" url="school-website/wir"></InfoCard>
          </Grid>
          <Grid item xs={5}>
            <InfoCard title="Matura" url="school-website/matura"></InfoCard>
          </Grid>
          <Grid item xs={5}>
            <InfoCard title="ORG" url="school-website/org"></InfoCard>
          </Grid>
          <Grid item xs={5}>
            <InfoCard title="W" url="school-website/w"></InfoCard>
          </Grid>
          <Grid item xs={5}>
            <InfoCard title="Vario" url="school-website/vario"></InfoCard>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}