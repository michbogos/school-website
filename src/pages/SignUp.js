import { Container, Stack } from '@mui/system'
import { TextField, Typography, Button } from '@mui/material'
import React from 'react'

export default function SignUp(props) {
  return (
    <Container maxWidth="sm">
        <Stack alignContent={"baseline"} spacing={4}>
            <center><Typography variant="h3">Konto Erstellen</Typography></center>
            <TextField id="name" label="Vorname"></TextField>
            <TextField id="surname" label="Nachname"></TextField>
            <TextField id="username" label="Benutzername"></TextField>
            <TextField id="email" label="E-mail"></TextField>
            <TextField id="password" label="Passwort"></TextField>
            <TextField id="passwordConfirm" label="Passwort wiederholen"></TextField>
            <Button onClick={()=>{props.signUp(document.getElementById("username").value,
                                               document.getElementById("email").value,
                                               document.getElementById("password").value,
                                               document.getElementById("passwordConfirm").value,
                                               document.getElementById("name").value,
                                               document.getElementById("surname").value)}} variant="contained">Konto erstellen</Button>
        </Stack>
    </Container>
  )
}
