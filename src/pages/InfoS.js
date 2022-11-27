import { Typography, Stack, List, ListItem} from '@mui/material'
import React from 'react'
import TopBar from '../components/TopBar'

export default function InfoS() {
  return (
    <Stack spacing={4}>
        <TopBar></TopBar>
        <Typography variant='h1'>Stundenplan</Typography>
        <Typography variant='h1'>Vario</Typography>
        <Typography variant='h1'>Matura</Typography>
        <Typography variant='h1'>VWA</Typography>
    </Stack>
  )
}
