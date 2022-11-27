import React from 'react'
import { useNavigate } from 'react-router-dom'

import {Card, CardContent, Button, Typography, CardActionArea} from "@mui/material"
import { Stack, Box} from '@mui/system'

import Logo from "../assets/logo.svg"

export default function InfoCard(props) {

  let navigate = useNavigate();

  return (
    <Card sx={{height:"50vh"}}>
        <CardContent sx={{height:"45vh"}}>
          <Stack spacing={5} justifyContent="space-between" sx={{height:"100%"}}>
            <Box>
              <Typography variant='h3'>{props.title}</Typography>
              <Typography>
                {props.description}
              </Typography>
            </Box>
              <CardActionArea>
                <Button onClick={()=>{navigate(props.url)}} variant="text">Mehr Erfahren</Button>
              </CardActionArea>
          </Stack>
        </CardContent>
    </Card>
  )
}
