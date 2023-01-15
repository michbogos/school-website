import { Typography, Stack, Button} from '@mui/material'
import React from 'react'

export default function NotFound() {
  return (
    <div height="100%">
        <center>
            <Stack gap={4} justifyContent={"center"}>
                <Typography variant='h1'>Ups...</Typography>
                <Typography variant="h3">Diese Seite existiert nicht.</Typography>
                <center><Button variant="outlined">Zurück zur Homepage</Button></center>
            </Stack>
        </center>
    </div>
  )
}
