import React from 'react'
import TopBar from '../components/TopBar'

import {Typography, Grid} from "@mui/material"
import { Container, Stack} from '@mui/system'

import { faker } from '@faker-js/faker';

let genImg=(n)=>{
  let components = []
  for(let i = 0; i < n; i++){
    components.push(<Grid item xs={1}><img href={faker.image.avatar()}></img></Grid>)
  }
  return components
}

export default function InfoA() {
  return (
    <React.Fragment>
      <TopBar></TopBar>
      <Container maxWidth="xl">
        <Stack spacing={4}>
          <Typography variant="h1">Schule</Typography>
          <Stack spacing={4} direction="row" alignItems={"center"}>
            <Typography height={"100%"} variant="body2">{faker.lorem.paragraph(10)}</Typography>
            <img src={faker.image.people()}></img>
          </Stack>
          <Typography variant="h1">Unterstufe</Typography>
          <Stack spacing={4} direction="row" alignItems={"center"}>
            <img src={faker.image.people()}></img>
            <Typography height={"100%"} variant="body2">{faker.lorem.paragraph(10)}</Typography>
          </Stack>
          <Typography variant="h1">Oberstufe</Typography>
          <Stack spacing={4} direction="row" alignItems={"center"}>
            <Typography height={"100%"} variant="body2">{faker.lorem.paragraph(10)}</Typography>
            <img src={faker.image.people()}></img>
          </Stack>
          <Stack spacing={4} direction="row" alignItems={"center"}>
            <Stack>
              <Typography variant="h2">ORG Zweig</Typography>
              <Typography height={"100%"} variant="body2">{faker.lorem.paragraph(10)}</Typography>
            </Stack>
            <Stack>
              <Typography variant="h2">W Zweig</Typography>
              <Typography height={"100%"} variant="body2">{faker.lorem.paragraph(10)}</Typography>
            </Stack>
          </Stack>
          <Typography variant="h1">Veranstaltungen</Typography>
          <Stack spacing={4} direction="row" alignItems={"center"}>
            <img src={faker.image.people()}></img>
            <Typography height={"100%"} variant="body2">{faker.lorem.paragraph(10)}</Typography>
          </Stack>
          <Typography variant="h1">Internat</Typography>
          <Stack spacing={4} direction="row" alignItems={"center"}>
            <Typography height={"100%"} variant="body2">{faker.lorem.paragraph(10)}</Typography>
            <img src={faker.image.people()}></img>
          </Stack>
          <Typography variant="h1">Lehrer</Typography>
          <Grid container spacing={1}>
            {genImg(5)}
          </Grid>
          <Typography variant="h1">Anmelden</Typography>
        </Stack>
      </Container>
    </React.Fragment>
  )
}
