import React from 'react'
import { useNavigate } from 'react-router-dom'

import {Button, Typography, Grid, Card} from "@mui/material"
import { Stack, Box} from '@mui/system'

import Logo from "../assets/logo.svg"

export default function InfoListItem(props) {

  let navigate = useNavigate();

  return (
    <Grid item>
        <Card>
            <Stack direction="row">
                <Box>
                    <Typography variant='h5'>{props.title}</Typography>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Button onClick={()=>{navigate(props.url)}} variant="text">Mehr Erfahren</Button>
                </Box>
                <Box>
                    <img src={Logo}></img>
                </Box>
            </Stack>
        </Card>
    </Grid>
  )
}
