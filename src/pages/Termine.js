import { Container, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import CalendarCard from '../components/CalendarCard'
import TopBar from '../components/TopBar'

let format = (date)=>{
  let months = ["Jan", "Feb", "März", "Apr", "Mai", "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Dez"]
  return  date.split(" ")[0].split("-")[2] + " " + months[parseInt(date.split(" ")[0].split("-")[1]-1)]
}

export default function Termine(props) {
  return (
    <React.Fragment>
    <TopBar></TopBar>
    <center>
    <Stack width="90vw">
      <Typography variant='h1'>Kalender</Typography>
      <Grid container spacing={4} overflow="scroll" minHeight="20vh" maxHeight="90vh">
        {props.termine.map((e)=>{
          return <Grid item xs={4}><CalendarCard title={e.title} description={e.content} date={format(e.date)}></CalendarCard></Grid>
        })}
      </Grid>
    </Stack>
    </center>
    </React.Fragment>
  )
}
