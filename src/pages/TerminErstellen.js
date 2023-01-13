import { Stack, Box} from '@mui/system'
import {React, useEffect, useState} from 'react'

import { redirect } from 'react-router-dom'
import { marked } from "marked"
import Login from './Login'
import DOMPurify from 'dompurify';
import { Button, TextField, Grid, Paper } from '@mui/material'

import dayjs from 'dayjs'
import 'dayjs/locale/de';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarCard from '../components/CalendarCard'


export default function BeitragErstellen(props){

  let createPost = (content)=>{
    props.pb.collection("posts").create({"title":"Title", "content":content, "creator":props.auth.record.username})
  }

  let format = (date)=>{
    if(date){
      let months = ["Jan", "Feb", "März", "Apr", "Mai", "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Dez"]
      return  date.split("-")[2] + " " + months[parseInt(date.split(" ")[0].split("-")[1])]
    }
    return ""
  }

  let createTermin = ()=>{
    props.pb.collection("termine").create({"title":title, "content":description, "date":format([time.year().toString(), time.month().toString(), time.date().toString()].join("-"))})
  }

  useEffect(()=>{
    if(!props.auth){
      redirect("school-website/login")
    }
  }, [])
  const [time, setTime] = useState(dayjs('2022-04-07'))
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  if(props.pb.authStore.isValid){
    return (
      <Stack>
        <Button variant="text" onClick={()=>{createTermin()}}>Posten</Button>
        <Stack direction="row" spacing={4}>
          <Stack height="100vh" spacing={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
              <DatePicker
                renderInput={(props) => <TextField {...props} />}
                label="Terminzeit"
                value={time}
                onChange={(res) => {
                  setTime(res);
                }}
              />
            </LocalizationProvider>
            <TextField label="Titel" onChange={(e)=>{setTitle(e.target.value)}}></TextField>
              <Paper variant='outlined'><Box onInput={(e)=>{setDescription(e.target.innerText)}} sx={{overflow:"scroll", padding:"1vh", width:"50vw"}} contentEditable></Box></Paper>
          </Stack>
          <Grid container spacing={4} overflow="scroll" minHeight="20vh" maxHeight="90vh">
            <Grid item xs={8}>
              <CalendarCard title={title} description={description} date={time ? format([time.year().toString(), time.month().toString(), time.date().toString()].join("-")) : ""}></CalendarCard>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    )
  }
  else{
    return(
      <Login logIn={props.logIn}></Login>
    )
  }
}
