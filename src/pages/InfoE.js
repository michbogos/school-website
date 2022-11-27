import { Container, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import CalendarCard from '../components/CalendarCard'
import TopBar from '../components/TopBar'

export default function InfoE() {
  return (
    <React.Fragment>
    <TopBar></TopBar>
    <center>
    <Stack width="90vw">
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <CalendarCard title="Schwimmwoche" description="glj;dflkjsadflksdjf" date="11 mar"></CalendarCard>
        </Grid>
        <Grid item xs={4}>
          <CalendarCard title="Schwimmwoche" description="glj;dflkjsadflksdjf" date="11 mar"></CalendarCard>
        </Grid>
        <Grid item xs={4}>
          <CalendarCard title="Schwimmwoche" description="glj;dflkjsadflksdjf" date="11 mar"></CalendarCard>
        </Grid>
        <Grid item xs={4}>
          <CalendarCard title="Schwimmwoche" description="glj;dflkjsadflksdjf" date="11 mar"></CalendarCard>
        </Grid>
      </Grid>
    </Stack>
    </center>
    </React.Fragment>
  )
}
