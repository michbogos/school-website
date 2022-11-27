import React from 'react'
import { Typography, Stack } from '@mui/material'

export default function Post(props) {
  return (
    <div>
        <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography>{props.title}</Typography>
            <Typography variant='caption'>{props.date}</Typography>
        </Stack>
        <Typography variant='body1'>{props.content}</Typography>
    </div>
  )
}
