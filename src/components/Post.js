import React from 'react'
import { Typography, Stack } from '@mui/material'
//import { v4 as uuidv4 } from 'uuid';

// Add markdown content

//const uuid = 

export default function Post(props) {
  return (
    <Stack sx={{padding:"2vh"}} justifyContent={"center"}>
      <div style={{maxHeight:"50vh",overflow:"scroll"}} dangerouslySetInnerHTML={{__html:props.content}}></div>
      <Typography variant="h6">Von {props.date ? props.date.split(" ")[0] : ""}</Typography>
    </Stack>
  )
}
