import React from 'react'

import {Card, Typography, Box, Stack} from "@mui/material";
import TopBar from './TopBar';

export default function CalendarCard(props) {
  return (
    <div>
        <TopBar></TopBar>
        <Stack>
            <Card>
                <Stack direction="row" spacing={4} justifyContent="space-between">
                    <Stack sx={{padding:"1em"}}>
                        <Typography variant="h4">{props.title}</Typography>
                        <Typography variant="p">{props.description}</Typography>
                    </Stack>
                    <Box sx={{backgroundColor:"primary.main", padding:"1rem"}}>
                        <Typography variant='h3' sx={{backgroundColor:"primary.main", color:"primary.contrastText"}}>{props.date}</Typography>
                    </Box>
                </Stack>
            </Card>
        </Stack>
    </div>
  )
}
