import React from 'react'

import {Card, Typography, Box, Stack} from "@mui/material";
import TopBar from './TopBar';

export default function CalendarCard(props) {
  return (
    <Card sx={{maxHeight:"10vh"}}>
        <Stack direction="row" spacing={4} justifyContent="space-between">
            <Stack sx={{padding:"1em"}}>
                <Typography variant="h4">{props.title}</Typography>
                <Typography variant="body1">{props.description}</Typography>
            </Stack>
            <Box sx={{backgroundColor:"primary.main", padding:"1rem"}}>
                <Typography variant='h3' sx={{backgroundColor:"primary.main", color:"primary.contrastText"}}>{props.date}</Typography>
            </Box>
        </Stack>
    </Card>
  )
}
