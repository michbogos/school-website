import { Stack, TextField, Typography, Button } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'

export default function Login(props) {
  return (
    <Container maxWidth="sm">
        <Stack alignContent={"baseline"} spacing={4}>
            <center><Typography variant="h3">Login</Typography></center>
            <TextField id="email" label="E-mail"></TextField>
            <TextField id="password" label="Passwort" type="password"></TextField>
            <Button onClick={()=>{props.logIn(document.getElementById("email").value, document.getElementById("password").value)}} variant="contained">Login</Button>
        </Stack>
    </Container>
  )
}
