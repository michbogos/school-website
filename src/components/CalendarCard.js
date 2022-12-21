import React from 'react'

import {Card, Typography, Box, Stack} from "@mui/material";

export default function CalendarCard(props) {
  return (
    <Card sx={{maxHeight:"30vh"}}>
        <Stack direction="row" spacing={4} justifyContent="space-between">
            <Stack sx={{padding:"1em"}}>
                <Typography variant="h4">{props.title}</Typography>
                <Typography sx={{whiteSpace:"pre-line"}} variant="body1">{props.description}</Typography>
            </Stack>
            <Box sx={{backgroundColor:"primary.main", padding:"1rem"}}>
                <Typography variant='h3' sx={{backgroundColor:"primary.main", color:"primary.contrastText", width:"30%"}}>{props.date}</Typography>
            </Box>
        </Stack>
    </Card>
  )
}
