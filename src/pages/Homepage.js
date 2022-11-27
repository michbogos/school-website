import React from 'react'

import TopBar from '../components/TopBar'
import InfoCard from '../components/InfoCard'

import Stack from "@mui/material/Stack"
import {Grid, List, ListItem, Typography} from "@mui/material"
import { Button, Toolbar, IconButton, Paper} from '@mui/material'
import { Container } from '@mui/system'

import Castle from "../assets/castle.jpg"
import { useNavigate } from 'react-router-dom'
import Post from '../components/Post'

//TODO: Add List Item component for easier item addition

export default function Homepage() {

  let gap = 4;
  let navigate = useNavigate();

  return (
    <Stack>
      <TopBar></TopBar>
      <img src={Castle} id="masked-text"></img>
      <Container>
        <Stack spacing={5}>
          <Stack spacing={5} direction={"row"}>
            <Typography></Typography>
            <InfoCard title="Info Schüler" url="/school-website/info/schueler"></InfoCard>
            <InfoCard title="Info Eltern"  url="/school-website/info/eltern"></InfoCard>
            <InfoCard title="Info Schule"  url="/school-website/info/schule"></InfoCard>
          </Stack>
          <Stack>
            <center>
              <Typography variant='h3'>Beiträge</Typography>
            </center>
            <List>
              <ListItem>
                <Post title="Beitrag" date="11.11.11" content="Das ist ein Beitrag"></Post>
              </ListItem>
            </List>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}