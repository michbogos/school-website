import React from 'react'

import {Stack, Avatar, Button} from "@mui/material"

import { useNavigate } from 'react-router-dom'

export default function LoggedInFragment(props) {
  let navigate = useNavigate();
  return (
    <Stack spacing={4} direction="row">
        {props.auth.record.verified ? <><Button onClick={()=>{navigate("/school-website/new")}} variant="text">Neuer Beitrag</Button>
                                      <Button onClick={()=>{navigate("/school-website/termin_erstellen")}} variant="text">Neuer Termin</Button>
                                      <Button onClick={()=>{navigate("/school-website/foto_hochladen")}} variant="text">Foto Hochladen</Button></>:
        <></>
        }
        <Button variant='text' onClick={props.logOut}>Log out</Button>
        <Avatar>{props.auth.record.username}</Avatar>
    </Stack>
  )
}
