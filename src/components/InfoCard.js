import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {Card, CardContent, Button, Typography, CardActionArea, ListItem, List, useMediaQuery, Container} from "@mui/material"
import { Stack, Box} from '@mui/system'

export default function InfoCard(props) {

  let navigate = useNavigate();
  const isSmall = useMediaQuery("(min-width:1000px)")

  return (
    <Card elevation={3}>
        <CardContent>
          <Stack spacing={5} direction={isSmall ? "row" : "column"} justifyContent="space-between" sx={{height:"100%"}}>
            <Box>
              <Typography variant='h3'>{props.title}</Typography>
              <List>
                {props.description.map((e)=>{return <ListItem alignItems='center'>
                                                      <center><Button component={Link} to={"/school-website/".concat(e.toLowerCase())}><Typography variant='body2' color="primary">{e}</Typography></Button></center>
                  </ListItem>})}
              </List>
            </Box>
          </Stack>
        </CardContent>
    </Card>
  )
}
