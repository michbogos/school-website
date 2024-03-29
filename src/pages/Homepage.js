import {React, Suspense, useEffect, useState} from 'react'

import InfoCard from '../components/InfoCard'

import Stack from "@mui/material/Stack"
import {Typography, CardContent, Skeleton, Grid, Slide} from "@mui/material"
import { Button, Paper, Card} from '@mui/material'
import { Container } from '@mui/system'

import Castle from "../assets/castle.jpg"
import Post from '../components/Post'
import Links from '../components/Links'

import useMediaQuery from '@mui/material/useMediaQuery'

//TODO: Add List Item component for easier item addition

export default function Homepage(props) {

  useEffect(()=>{
    props.getPosts()
  }, [])

  let gap = 4;
  const isSmall = useMediaQuery("(min-width:1000px)")
  const [showAmmount, setShowAmmount] = useState(1)
  return (
    <Stack gap={4}>
    {isSmall ? <img src={Castle} id="masked-text"></img> : <img src={Castle} id="masked-text-small"></img>}
      <Container maxWidth="xl">
        <Stack spacing={5}>
          {isSmall ?
          <Stack spacing={5} alignItems={isSmall ? "unset" : "center"} direction={isSmall ? "row" : "column"}>
            <InfoCard description={["Stundenplan", "VWA", "Matura", "Termine"]} title="Info Schüler" url="/school-website/info/schueler"></InfoCard>
            <InfoCard description={["Termine", "Elternsprechtag", "Kontakt"]} title="Info Eltern"  url="/school-website/info/eltern"></InfoCard>
            <InfoCard description={["Lehrer", "Mitarbeiter", "Bilder", "Veranstaltungen", "Internat", "Anmelden", "Speisesaal"]} title="Info Schule"  url="/school-website/info/schule"></InfoCard> 
            <Card elevation={3}>
              <CardContent>
                <Links></Links>
              </CardContent>
            </Card>  
          </Stack> :
          <Grid container gap={4} width="100%">
            <Grid item xs={12}>
              <InfoCard description={["Stundenplan", "VWA", "Matura", "Termine"]} title="Info Schüler" url="/school-website/info/schueler"></InfoCard>
            </Grid>
            <Grid item>
              <InfoCard description={["Termine", "Elternsprechtag", "Kontakt"]} title="Info Eltern"  url="/school-website/info/eltern"></InfoCard>
            </Grid>
            <Grid item>
              <InfoCard description={["Lehrer", "Mitarbeiter", "Bilder", "Veranstaltungen", "Internat", "Anmelden", "Speisesaal"]} title="Info Schule"  url="/school-website/info/schule"></InfoCard> 
            </Grid>
            <Grid item xs={12}>
              <Card elevation={3}>
                <CardContent>
                  <Links></Links>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          }
            <Stack>
              <Typography variant='h3'>Beiträge</Typography>
              <Stack sx={{width:"100%"}} spacing={4}>
                {
                  props.posts === false ? <><Skeleton variant='rectangular'></Skeleton>
                  <Skeleton variant='rectangular'></Skeleton>
                  <Skeleton variant='rectangular'></Skeleton></> :
                
                props.posts.slice(0, 5*showAmmount).map((element)=>{return (
                  <Paper>
                    <Post sx={{width:"100%", overflow:'scroll'}} title={element.title} date={element.created} content={element.content}></Post>
                  </Paper>
                  )
                })}
                <Button onClick={()=>{setShowAmmount(showAmmount+1);console.log(showAmmount)}} variant="text">Mehr zeigen</Button>
              </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}