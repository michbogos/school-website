import { Container, Grid, Typography } from '@mui/material'
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
      <Typography variant='h1'>Kalender</Typography>
      <Grid container spacing={4} height="90vh">
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
      <Typography variant="h1">Elternsprechtag</Typography>
    </Stack>
    </center>
    </React.Fragment>
  )
}
