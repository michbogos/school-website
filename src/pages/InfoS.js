import { Typography, Stack, List, ListItem} from '@mui/material'
import React from 'react'
import TopBar from '../components/TopBar'

export default function InfoS() {
  return (
    <Stack spacing={10}>
        <TopBar></TopBar>
        <Stack direction="row" justifyContent={"space-evenly"}>
            <Stack>
                <Typography variant="h1">Infos</Typography>
                <List>
                    <ListItem>
                        <Typography variant="h3">Info 1</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h3">Info 1</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h3">Info 1</Typography>
                    </ListItem>
                </List>
            </Stack>
            <Stack>
            <Typography variant="h1">Termine</Typography>
            </Stack>
        </Stack>
    </Stack>
  )
}
