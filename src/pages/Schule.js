import { Typography, Stack, Table, TableRow, TableCell, TableHead, TableBody, TableFooter } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Utable from '../components/Utable'

export default function Schule() {
  return (
    <Stack direction="row">
      <div>
        <Typography textAlign="center" variant="h1">Unterstufe</Typography>
        <Container maxWidth="md">
          <Typography variant="body1">In der Unterstufe wird das wirtschaftskundliche Realgymnasium und das naturwissenschaftliche Realgymnasium gemeinsam unterrichtet. Die Typenwahl ist erst <strong>ab der 5. Klasse</strong> erforderlich.</Typography>
          <Utable></Utable>
        </Container>
      </div>
      <div>
        
      </div>
    </Stack>
  )
}