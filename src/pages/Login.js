import { Stack, TextField, Typography, Button, Link } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'

export default function Login(props) {
  const [reset, setReset] = useState(false);
  if(!reset){
    return (
      <Container maxWidth="sm">
        <Stack alignContent={"baseline"} spacing={4}>
            <center><Typography variant="h3">Login</Typography></center>
            <TextField id="email" label="E-mail" helperText={props.error ? "Falsches Passwort oder E-mail" : ""} error={props.error}></TextField>
            <TextField id="password" label="Passwort" helperText={props.error ? "Falsches Passwort oder E-mail" : ""} type="password" error={props.error}></TextField>
            <Button onClick={()=>{props.logIn(document.getElementById("email").value, document.getElementById("password").value)}} variant="contained">Login</Button>
            <center><Link onClick={()=>{setReset(true)}}>Passwort vergessen?</Link></center>
        </Stack>
      </Container>
    )
  }
  else{
    return(
      <div>reset</div>
    )
  }
}
