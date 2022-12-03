import React from 'react'

import TopBar from '../components/TopBar'
import InfoCard from '../components/InfoCard'

import Stack from "@mui/material/Stack"
import {Grid, List, ListItem, Typography, Link, CardContent} from "@mui/material"
import { Button, Toolbar, IconButton, Paper, Card} from '@mui/material'
import { Container } from '@mui/system'

import Castle from "../assets/castle.jpg"
import { useNavigate } from 'react-router-dom'
import Post from '../components/Post'
import Links from '../components/Links'

import useMediaQuery from '@mui/material/useMediaQuery'

//TODO: Add List Item component for easier item addition

export default function Homepage(props) {

  let gap = 4;
  let navigate = useNavigate();
  const isSmall = useMediaQuery("(min-width:1000px)")
  console.log(props.posts);
  return (
    <Stack>
      <img src={Castle} id="masked-text"></img>
      <Container maxWidth="xl">
        <Stack spacing={5}>
          <Stack spacing={5} direction={isSmall ? "row" : "column"}>
            <Typography></Typography>
            <InfoCard description={["Stundenplan", "VWA", "Matura", "Tremine"]} title="Info Schüler" url="/school-website/info/schueler"></InfoCard>
            <InfoCard description={["Termine", "Elternsprechtag", "Kontakt"]} title="Info Eltern"  url="/school-website/info/eltern"></InfoCard>
            <InfoCard description={["Lehrer", "Mitarbeiter", "Bilder", "Veranstaltungen", "Internat", "Anmelden", "Speisesaal"]} title="Info Schule"  url="/school-website/info/schule"></InfoCard> 
            <Card elevation={3}>
              <CardContent>
                <Links></Links>
              </CardContent>
            </Card>  
          </Stack>
          <Stack direction={"row"} spacing={120}>
            <Stack>
              <Typography variant='h3'>Beiträge</Typography>
              <List>
                {props.posts.map((element)=>{return (
                  <ListItem>
                  <Post title={element.title} date={element.created} content={element.content}></Post>
                  </ListItem>
                  )
                })}
              </List>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}