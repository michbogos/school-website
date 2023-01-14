import { Button, Container, Grid, Skeleton, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react'
import CalendarCard from '../components/CalendarCard'
import TopBar from '../components/TopBar'

let format = (date)=>{
  let months = ["Jan", "Feb", "März", "Apr", "Mai", "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Dez"]
  return  date.split(" ")[0].split("-")[2] + " " + months[parseInt(date.split(" ")[0].split("-")[1]-1)]
}

export default function Termine(props) {
  const [count, setCount] = useState(1)
  
  useEffect(()=>{
    props.getTermine()
  }, [])

  return (
    <React.Fragment>
    <center>
    <Stack width="90vw">
      <Typography variant='h1'>Kalender</Typography>
      <Grid container spacing={4} minHeight="20vh">
        {!props.termine ? <><Grid item xs={4}>
            <Skeleton></Skeleton>
            </Grid>
            <Grid item xs={4}>
            <Skeleton></Skeleton>
          </Grid>
          <Grid item xs={4}>
          <Skeleton></Skeleton>
        </Grid>
        <Grid item xs={4}>
        <Skeleton></Skeleton>
      </Grid></> :
        props.termine.slice(0, count*6).map((e)=>{
          return <Grid item xs={4}><CalendarCard title={e.title} description={e.content} date={e.date}></CalendarCard></Grid>
        })}
      </Grid>
    </Stack>
    {props.termine.length > count*6 &&
      <Button variant='text' onClick = {()=>{setCount(count + 1)}}>Mehr Zeigen</Button>
    }
    </center>
    </React.Fragment>
  )
}


