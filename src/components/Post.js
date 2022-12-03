import React from 'react'
import { Typography, Stack } from '@mui/material'
//import { v4 as uuidv4 } from 'uuid';

// Add markdown content

//const uuid = 

export default function Post(props) {
  return (
    <Stack justifyContent={"center"}>
      <center>
        <Typography variant="h3">{props.title}</Typography>
      </center>
        <div dangerouslySetInnerHTML={{__html:props.content}}></div>
      <Typography variant="h6">Von {props.date.split(" ")[0]}</Typography>
    </Stack>
  )
}
