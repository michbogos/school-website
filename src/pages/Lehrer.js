import { Grid, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'

export default function Lehrer(props){

  const [data, setData] = useState([])

  useEffect(()=>{
    setData([])
  })

  return (
    <Container maxWidth={"xl"}>
      <Stack>
        <Typography>Lehrer</Typography>
        <Grid container>
          
        </Grid>
      </Stack>
    </Container>
  )
}
