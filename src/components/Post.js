import React from 'react'
import { Typography, Stack } from '@mui/material'

// Add markdown content

export default function Post(props) {
  return (
    <Stack justifyContent={"center"}>
      <center>
        <Typography variant="h3">{props.title}</Typography>
      </center>
      <Typography variant='body1'>
        {props.content}
      </Typography>
      <Typography variant="h6">Von {props.date}</Typography>
    </Stack>
  )
}
